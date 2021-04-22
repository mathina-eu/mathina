<template>
  <StoryView :is-loading="isLoading">
    <div class="root text-left">
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
          :toolbar-text="action.toolbarText"
          :url="action.url"
          :cta="action.cta"
          :img="action.img"
          :toolbar-img="action.toolbarImg"
          :img-root="imgRoot"
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
            </v-icon>
            {{ $t('story.back') }}
          </v-btn>
          <v-btn
            v-if="hasMoreActions"
            class="mt-12"
            title="You can use the right arrow on your keyboard as well!"
            @click="next"
          >
            {{ $t('story.next') }}
            <v-icon
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
  BackgroundAction,
  ImageAction,
} from '~/components/story/action-types';
import { preloadImage } from '~/utils';

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
    };
  },
  computed: {
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
  async mounted() {
    await this.preloadImagesForActions(this.actions);
    this.isLoading = false;

    this.$store.dispatch('setBreadcrumbs', [
      { path: `/world/`, text: 'World Map' },
      { path: `/story/${this.story?.slug}/`, text: this.story?.title },
    ]);

    document.addEventListener('keydown', this.keydownListener);
    this.executeCurrentAction();

    // If there's an action link (eg url query has ?actionLink=tagName), execute up to action with tag: tagName
    const tag = this.$route.query['actionLink'];
    if (tag) {
      while (this.action.tag !== tag && this.currentActionId < this.actions.length - 1) {
        this.next();
      }
    }
  },
  destroyed() {
    document.removeEventListener('keydown', this.keydownListener);
  },
  methods: {
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

      if (this.currentActionId - 1 === this.firstInteractiveActionId && this.currentActionId > 0) {
        this.currentActionId--;
        this.back();
        return;
      }

      if (this.action instanceof DialogAction) {
        this.dialog.current--;
        if (this.dialog.current >= 0) {
          return;
        }
      }

      if (this.currentActionId <= 0) {
        this.currentActionId--;
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
