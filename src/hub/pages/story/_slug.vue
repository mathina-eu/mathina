<template>
  <StoryView>
    <div class="root">
      <StoryBackgrounds :backgrounds="backgrounds" />
      <StoryImages :images="images" />
      <div class="text-wrapper mt-16">
        <StoryDialog
          v-if="isDialogMode"
          v-bind="activeDialog"
        />
        <SceneText
          v-else-if="isSceneTextAction"
          :text="action.text"
        />
        <GameView
          v-else-if="isGameMode"
          :text="action.text"
          :url="action.url"
          :cta="action.cta"
          @lastGameFinished="isLastGameFinished=true"
        />
        <div>
          <v-btn
            v-if="!isFirstAction"
            class="mt-12"
            title="You can use the left arrow on your keyboard as well!"
            @click="back"
          >
            <v-icon
              class="mr-1"
              small
            >
              mdi-arrow-left-circle-outline
            </v-icon> Back
          </v-btn>
          <v-btn
            v-if="hasMoreActions"
            class="mt-12"
            title="You can use the right arrow on your keyboard as well!"
            @click="next"
          >
            Next <v-icon
              class="ml-1"
              small
            >
              mdi-arrow-right-circle-outline
            </v-icon>
          </v-btn>
        </div>
        <v-btn
          v-if="!hasMoreActions && isLastGameFinished"
          class="mt-12"
          @click="$router.back()"
        >
          All done!
        </v-btn>
      </div>
    </div>
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
import {
  ActionFactory,
  SceneTextAction,
  DialogAction,
  GameAction,
} from '~/components/story/action-types';

const BACK = 'back';
const NEXT = 'next';

export default {
  components: {
    StoryImages,
    StoryBackgrounds,
    StoryView,
    SceneText,
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
      activeDirection: NEXT,
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

      if (this.currentActionId <= 0) {
        this.next();
        return;
      }

      this.currentActionId--;
      this.executeCurrentAction();
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
      this.executeCurrentAction();
    },
    autoProgress() {
      if (this.activeDirection === NEXT) {
        this.next();
      } else {
        this.back();
      }
    },
    executeCurrentAction() {
      // TODO: Back action for "Clear image"...
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
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  width: 100%;
  position: relative;
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
</style>
