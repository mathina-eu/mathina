<template>
  <StoryView
    :is-loading="isLoading"
    :full-width="fullWidth"
    :background="storyBackground"
  >
    <Parallax class="root">
      <template
        v-for="layer in ['back1', 'back2', 'back3', 'mid1', 'mid2', 'mid3', 'front1', 'front2', 'front3']"
        :slot="layer"
      >
        <StoryBackgrounds
          :key="layer"
          :backgrounds="parallaxedBackgrounds(layer)"
          @base-bg="getBg"
        />
        <StoryImages
          :key="`${layer}img`"
          :images="parallaxedImages(layer)"
        />
      </template>
      <div class="navigation">
        <v-btn
          v-if="!isFirstAction"
          class="navigation__button"
          color="grey lighten-5"
          title="You can use the left arrow on your keyboard as well!"
          @click="back"
        >
          <v-icon>
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <v-btn
          v-if="hasMoreActions"
          class="navigation__button right"
          color="grey lighten-5"
          title="You can use the right arrow on your keyboard as well!"
          @click="next"
        >
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>
      <div class="text-wrapper mt-5">
        <StoryDialog
          v-if="isDialogMode"
          v-bind="activeDialog"
        />
        <SceneText
          v-else-if="isSceneTextAction"
          :text="action.text"
          :style-text="action.style"
        />
        <GameView
          v-else-if="isGameMode"
          :text="action.text"
          :toolbar-text="action.toolbarText"
          :url="action.url"
          :cta="action.cta"
          :img="action.img"
          :toolbar-img="action.toolbarImg"
          :img-root="imgRoot"
          @lastGameFinished="isLastGameFinished=true"
        />
        <v-btn
          v-if="!hasMoreActions"
          class="mt-12"
          @click="$router.back()"
        >
          {{ $t('story.back-to-world') }}
        </v-btn>
      </div>
    </Parallax>
  </StoryView>
</template>

<script>
import yaml from 'js-yaml';
import constants from '~/constants';
import StoryView from '~/components/StoryView';
import StoryDialog from '~/components/story/StoryDialog';
import SceneText from '~/components/story/SceneText';
import GameView from '~/components/story/GameView';
import StoryBackgrounds from '~/components/story/StoryBackgrounds';
import StoryImages from '~/components/story/StoryImages';
import Parallax from '~/components/Parallax';
import {
  ActionFactory,
  SceneTextAction,
  DialogAction,
  GameAction,
  BackgroundAction,
  ImageAction,
  AnimationAction,
} from '~/components/story/action-types';
import { preloadImage } from '~/utils';

const BACK = 'back';
const NEXT = 'next';

export default {
  components: {
    Parallax,
    StoryImages,
    StoryBackgrounds,
    StoryView,
    SceneText,
    GameView,
    StoryDialog,
  },
  async asyncData({ $axios, params, app: { i18n } }) {
    const locale = i18n.locale === i18n.defaultLocale ? '' : `-${i18n.locale}`;
    const story = constants.STORIES.find(({ slug }) => slug === params.slug);
    const { data } = await $axios.get(`/stories/${story.id}/actions${locale}.yaml`);
    const { actions } = yaml.load(data);

    const parsedActions = actions.map(action => ActionFactory.create(action));

    return {
      actions: parsedActions,
      story: Object.freeze(story),
    };
  },
  data() {
    return {
      isLoading: true,
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
      activeDirection: NEXT,
      showGameDialog: false,
      isLastGameFinished: true,
      storyBackground: null,
    };
  },
  computed: {
    fullWidth() {
      return this.story?.fullWidth || false;
    },
    firstInteractiveActionId() {
      for (let [id, action] of this.actions.entries()) {
        if (!action.autoProgress) {
          return id;
        }
      }
      return 0;
    },
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
        return { ...this.dialog.entries[this.dialog.current], avatarAlign: this.dialog.avatarAlign, styleText: this.dialog.style };
      }
      return {};
    },
    isSceneTextAction() {
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
    isFirstAction() {
      // Find first action without auto progress
      let firstActionWithoutAuto = this.actions.findIndex(action => !action.autoProgress);
      return this.currentActionId === firstActionWithoutAuto;
    },
  },
  async mounted() {
    await this.preloadImagesForActions(this.actions);
    this.isLoading = false;

    this.$store.dispatch('setBreadcrumbs', [
      { path: `/world/`, text: this.$t(`world.map`) },
      { path: `/story/${this.story?.slug}/`, text: this.$t(`story.titles.${this.story.id}`) },
    ]);

    document.addEventListener('keydown', this.keydownListener);
    this.executeCurrentAction();

    // If there's an action link (eg url query has ?actionLink=tagName), execute up to action with tag: tagName
    const tag = this.$route.query['actionLink'];
    if (tag) {
      const executor = () => {
        this.$nextTick(() => {
          if (this.action.tag !== tag && this.currentActionId < this.actions.length - 1) {
            this.next();
            executor();
          }
        });
      };
      executor();
    }
  },
  destroyed() {
    document.removeEventListener('keydown', this.keydownListener);
  },
  methods: {
    parallaxedBackgrounds(layer) {
      return this.backgrounds.filter(bg => bg.parallax === layer);
    },
    parallaxedImages(layer) {
      return this.images.filter(img => img.parallax === layer);
    },
    async preloadImagesForActions(actionsToPreload) {
      const images = new Set();
      for (let action of actionsToPreload) {
        if (action instanceof DialogAction) {
          for (let dialog of action.entries) {
            const mood = dialog.mood ? dialog.mood : 'normal';
            const portrait = `/portraits/${dialog.char.toLocaleLowerCase()}/${mood}00.data.png`;
            images.add(portrait);
          }
        }

        if (action instanceof ImageAction || action instanceof BackgroundAction) {
          images.add(action.getAssetPath(this.imgRoot));
        }
      }
      await Promise.all(Array.from(images).map(i => preloadImage(i)));
    },
    keydownListener({ key, keyCode }) {
      // TODO: debounce?
      if (key === 'ArrowRight' || keyCode === 39) {
        this.next();
      } else if (key === 'ArrowLeft') {
        this.back();
      }
    },
    back() {
      this.activeDirection = BACK;

      if (this.action instanceof DialogAction) {
        this.dialog.current--;
        if (this.dialog.current >= 0) {
          return;
        }
      }

      if (this.currentActionId - 1 === this.firstInteractiveActionId && this.currentActionId > 0) {
        this.currentActionId--;
        this.back();
        return;
      }

      if (this.currentActionId <= 0) {
        this.currentActionId--;
        this.next();
        return;
      }

      this.currentActionId--;

      if (this.action instanceof AnimationAction) {
        this.$nextTick(() => {
          this.executeCurrentAction();
        });
      } else {
        this.executeCurrentAction();
      }
    },
    next() {
      this.activeDirection = NEXT;

      if (this.action instanceof DialogAction) {
        if (this.progressDialog()) {
          return;
        }
      }

      if (!this.hasMoreActions) {
        return false;
      }
      this.currentActionId++;

      if (this.action instanceof AnimationAction) {
        this.$nextTick(() => {
          this.executeCurrentAction();
        });
      } else {
        this.executeCurrentAction();
      }
    },
    autoProgress() {
      if (this.activeDirection === NEXT) {
        this.next();
      } else {
        this.back();
      }
    },
    executeCurrentAction() {
      this.action.execute(this);
      if (this.action.autoProgress) {
        this.autoProgress();
      }
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
    getBg(bgUrl) {
      this.storyBackground = bgUrl;
    }
  },
};
</script>

<style scoped>
@import "~vars";

.root {
  height: 100%;
  width: 100%;
}

.text-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.navigation {
  margin: auto;
  position: absolute;
  left: calc(-1 * var(--navigation-button-size));
  top: 50%;
  z-index: 5;
  width: calc(100% + (2 * var(--navigation-button-size)));
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);

  &__button {
    width: var(--navigation-button-size);
    min-width: var(--navigation-button-size) !important;
    height: var(--navigation-button-size) !important;
    border-radius: 50%;
    position: sticky;
    margin: 0 0.5rem;
    left: 0.5rem;
    box-shadow: #0000000d 0 0 0 5px;

    &.right {
      right: 0.5rem;
      left: unset;
      margin-left: auto;
    }

    .v-icon {
      font-size: 48px;
    }
  }
}
</style>
