<template>
  <GameView>
    <div
      ref="storyRoot"
      class="root"
    >
      <div class="backgrounds">
        <div class="backgrounds__images">
          <img
            v-for="bg in backgrounds"
            :key="bg.src"
            :src="bg.src"
            :style="bg.style"
          >
        </div>
      </div>
      <div class="images-wrapper">
        <transition-group
          appear
          name="fade"
          tag="div"
        >
          <img
            v-for="image in images"
            :key="image.src"
            :src="image.src"
            :class="`images-wrapper__image--${image.position.horizontal} images-wrapper__image--vertical-${image.position.vertical}`"
            class="images-wrapper__image"
            :style="image.style"
          >
        </transition-group>
      </div>
      <div class="text-wrapper mt-16">
        <div
          v-if="isDialogMode"
          class="dialog"
        >
          <StoryDialog v-bind="activeDialog" />
        </div>
        <div v-if="isSceneTextMode">
          <v-card max-width="600">
            <v-card-text class="text-body-1">
              <div v-html="action.text" />
            </v-card-text>
          </v-card>
        </div>
        <div
          v-if="isGameMode"
          class="game-overview"
        >
          <v-card width="600">
            <v-toolbar
              color="primary"
              dark
            >
              <v-spacer />
              <v-toolbar-title>{{ action.text }}</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-actions class="py-8">
              <v-spacer />
              <v-dialog
                v-model="showGameDialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ action.cta }}
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar
                    dark
                    color="primary"
                  >
                    <v-btn
                      icon
                      dark
                      @click="showGameDialog=false;isLastGameFinished=true;"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{ action.text }}</v-toolbar-title>
                    <v-spacer />
                    <v-toolbar-items>
                      <v-btn
                        dark
                        text
                        @click="showGameDialog=false;isLastGameFinished=true;"
                      >
                        Finish
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <iframe
                    v-if="showGameDialog"
                    :src="action.url"
                    class="game"
                  />
                </v-card>
              </v-dialog>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </div>
        <v-btn
          v-if="hasMoreActions"
          class="mt-12"
          title="You can use the right arrow on your keyboard as well!"
          @click="next"
        >
          Next
        </v-btn>
        <v-btn
          v-else-if="isLastGameFinished"
          class="mt-12"
          @click="$router.back()"
        >
          All done!
        </v-btn>
      </div>
    </div>
  </GameView>
</template>

<script>
import yaml from 'js-yaml';
import constants from '~/constants';
import StoryDialog from '~/components/story/StoryDialog';
import GameView from '~/components/GameView';
import {
  ActionFactory,
  BackgroundAction,
  ImageAction,
  SceneTextAction,
  DialogAction,
  GameAction,
  ClearImageAction,
} from '~/components/story/action-types';

export default {
  components: {
    GameView,
    StoryDialog,
  },
  async asyncData({ $axios, params }) {
    // Note: app used instead of 'this' as, 'this' is not available yet in asyncData
    const story = constants.STORIES.find(({ slug }) => slug === params.slug);
    const { data } = await $axios.get(`/stories/${story.id}/actions.yaml`);
    const { actions } = yaml.load(data);

    return {
      actions: actions.map(action => ActionFactory.create(action)),
      story: Object.freeze(story),
    };
  },
  data() {
    return {
      constants,
      currentActionId: 0,
      actionExecutor: null,
      images: [],
      mode: null,
      dialog: {
        entries: [],
        current: null,
      },
      backgrounds: [],
      devDirection: this.next,
      showGameDialog: false,
      isLastGameFinished: true,
    };
  },
  computed: {
    action() {
      return this.actions[this.currentActionId];
    },
    hasMoreActions() {
      if (this.isDialogMode) {
        return true;
      }
      return this.currentActionId < this.actions.length - 1;
    },
    activeDialog() {
      if (this.dialog.current !== null) {
        return this.dialog.entries[this.dialog.current];
      }
      return {};
    },
    isSceneTextMode() {
      return this.action instanceof SceneTextAction;
    },
    isDialogMode() {
      return this.action instanceof DialogAction;
    },
    isGameMode() {
      return this.action instanceof GameAction;
    },
    imgRoot() {
      return `/stories/${this.story.id}/img`;
    },
  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', [
      { path: `/world/`, text: 'World Map' },
      { path: `/story/${this.story?.slug}/`, text: this.story?.title },
    ]);

    document.addEventListener('keydown', this.keydownListener);
    this.executeCurrentAction();
  },
  destroyed() {
    document.removeEventListener('keydown', this.keydownListener);
  },
  methods: {
    keydownListener({ key, keyCode }) {
      // TODO: debounce?
      if (key === 'ArrowRight' || keyCode === 39) {
        this.next();
      } else if (key === 'ArrowLeft') {
        this.devPrev();
      }
    },
    // TODO: Backwards direction is a bit broken for some actions. Use for dev purposes only for now.
    devPrev() {
      this.devDirection = this.devPrev;

      if (this.action instanceof DialogAction) {
        this.dialog.current--;
        if (this.dialog.current >= 0) {
          return;
        }
      }

      if (this.currentActionId <= 0) {
        return;
      }

      this.currentActionId--;
      this.executeCurrentAction();
    },
    next() {
      this.devDirection = this.next;

      if (this.action instanceof DialogAction) {
        if (this.progressDialog()) {
          return;
        }
      }

      if (!this.hasMoreActions) {
        return false;
      }
      this.currentActionId++;
      this.executeCurrentAction();
    },
    executeCurrentAction() {
      console.info('Executing:', this.action);

      // TODO: This can be refactor to something reasonable...
      if (this.action instanceof DialogAction) {
        this.actionDialog(this.action);
      } else if (this.action instanceof BackgroundAction) {
        this.setBackground(this.action);
        // auto progress
        this.devDirection();
      } else if (this.action instanceof ImageAction) {
        this.setImage(this.action);
        // auto progress
        this.devDirection();
      } else if (this.action instanceof ClearImageAction) {
        this.clearImage(this.action);
        // auto progress
        this.devDirection();
      } else if (this.action instanceof SceneTextAction) {
        this.setSceneText(this.action);
      } else if (this.action instanceof GameAction) {
        this.showGame(this.action);
      }
    },
    actionDialog({ entries }) {
      this.dialog.entries = entries;
      this.dialog.current = 0;
    },
    progressDialog() {
      if (this.dialog.current + 1 >= this.dialog.entries.length) {
        // Finish dialog sequence, progress to next action
        return false;
      }
      // Progress dialog
      this.dialog.current++;
      return true;
    },
    setBackground({ src, style }) {
      const path = `${this.imgRoot}/bg/${src}`;
      this.backgrounds = [...this.backgrounds, { src: path, style }];
    },
    setImage({ id, src, align = 'center', style = '' }) {
      const images = this.images.filter(img => !img.id || img.id !== id);
      const path = `${this.imgRoot}/${src}`;
      // TODO: Vertical align...
      images.push({ id, src: path, style, position: { vertical: 'center', horizontal: align } });
      this.images = images;
    },
    clearImage({ id }) {
      this.images = this.images.filter(img => img.id !== id);
    },
    setSceneText({ text }) {
      // todo?
    },
    showGame({ text, url, cta }) {
      this.isLastGameFinished = false;
    },
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  width: 100%;
  position: relative;
}

.images-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;

  &__image {
    max-width: 450px;
    position: absolute;
    top: 30%;

    &--left {
      left: 1rem;
    }

    &--center {
      left: 40%;
    }

    &--right {
      right: 1rem;
    }

    &--vertical-bottom {
      bottom: 1rem;
    }

    &--vertical-center {
      top: 40%;
    }

    &--vertical-top {
      top: 1rem;
    }
  }
}

.text-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.game {
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  overflow: hidden;
}

.backgrounds {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  &__images {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
