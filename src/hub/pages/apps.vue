<template>
  <v-row>
    <v-col
      cols="8"
      offset="2"
    >
      <h2>{{ $t('appList.title') }}</h2>
      <p>{{ $t('appList.description') }}</p>
      <v-treeview
        rounded
        hoverable
        activatable
        :items="storyTreeItems"
        open-on-click
        @update:active="updateActive"
      />
      <v-dialog
        v-model="showGameDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            light
            color="grey lighten-5"
          >
            <v-toolbar-title>{{ game.listTitle || game.toolbarText || game.text }}</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-btn
                icon
                light
                @click="showGameDialog=false; $emit('lastGameFinished');"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <iframe
            v-if="showGameDialog"
            ref="iframe"
            :src="game.url"
            class="game"
            :class="{'game--loading': isGameLoading && requiresScalingFix}"
            :style="iframeStyle"
          />
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import constants from '~/constants';
import STORIES from '~/story-meta';
import {
  ActionFactory,
} from '~/components/story/action-types';

export default {
  async asyncData({ $axios, params, route, app: { i18n } }) {
    const locale = i18n.locale === i18n.defaultLocale ? '' : `-${i18n.locale}`;
    const { data } = await $axios.get(`/apps-list/apps${locale}.json`);
    const appMap = {};
    const stories = [];
    const targetTag = route.query['tag'];
    const targetStory = route.query['story'];
    const targetAppNumber = route.query['appNumber'];

    let activeApp = {};
    let showGameDialog = false;

    for (let storyData of data) {
      const story = { id: storyData.story, apps: [], ...data };

      let i = 0;
      for (let appData of storyData.apps) {
        let app = ActionFactory.create(appData);
        story.apps.push(app);
        appMap[app.url] = app;

        if (targetStory && story.id === targetStory) {
          if (targetTag && app.tag === targetTag || targetAppNumber && `${i}` === targetAppNumber) {
            activeApp = app;
            showGameDialog = true;
          }
        }
        i++;
      }
      stories.push(story);
    }

    return {
      stories,
      appMap,
      game: activeApp,
      showGameDialog,
      requiresScalingFix: false,
      fullWidth: false,
      isGameLoading: true,
      iframeStyle: '',
      previousKey: null,
    };
  },
  computed: {
    storyTreeItems() {
      if (!this.stories) {
        return [];
      }

      let items = [];
      for (let story of this.stories) {
        items.push({
          id: story.id,
          name: `${this.$t(`cities.${constants.STORY_TO_CITY[story.id]}`)}: ${this.$t(`story.titles.${story.id}`)}`,
          children: story.apps.filter(app => !app.doNotList).map((app, index) => ({
            id: `${app.url}-_-_-${index}-_-_-${story.id}`,
            name: app.listTitle || app.toolbarText || app.text,
          })),
        });
      }
      return items;
    }
  },
  watch: {
    showGameDialog: {
      handler(isShown, wasShown) {
        this.iframeStyle = '';
        this.isGameLoading = true;
        if (isShown && !wasShown) {
          setTimeout(() => {
            this.setScaling();
          }, 1000); // TODO: ?
        }
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.setScaling);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setScaling);
  },
  methods: {
    setScaling() {
      if (!this.requiresScalingFix || !this.fullWidth || !this.showGameDialog) {
        return false;
      }
      let el = this.$refs.iframe;
      // let elementWidth = el.clientWidth;
      // let elementHeight = el.clientHeight;
      // Hardcoded to fire story sizes
      let elementWidth = 1920;
      let elementHeight = 1080;
      let bodyWidth = window.innerWidth;
      let bodyHeight = window.innerHeight;
      if (!elementWidth || !bodyWidth) {
        return false;
      }

      if (bodyWidth > elementWidth && bodyHeight > elementHeight) {
        this.isGameLoading = false;
        this.iframeStyle = '';
        return false;
      }

      let ratio = bodyWidth / elementWidth;
      let newHeight = ratio * elementHeight;
      let rect = el.getBoundingClientRect();
      let horizontalOrigin = 'left';

      if (newHeight > (bodyHeight - rect.y)) {
        ratio = (bodyHeight - rect.y) / elementHeight;
        horizontalOrigin = 'left';
      }
      let newElementWidth = Math.floor(elementWidth / ratio);
      let newElementHeight = Math.floor(elementHeight / ratio);
      this.iframeStyle = `width: ${newElementWidth}px; height: ${newElementHeight}px; transform: scale(${ratio}); transform-origin: ${horizontalOrigin} top;`;
      this.$nextTick(() => {
        this.isGameLoading = false;
      });
    },
    updateActive(key) {
      if (!key || key.length < 1) {
        key = this.previousKey;
      } else {
        this.previousKey = key;
      }
      let [appUrl, _, storyId] = key[0].split('-_-_-');
      let selectedApp = this.appMap[appUrl];
      let story = STORIES.find(({ id }) => id === storyId);

      if (selectedApp) {
        this.game = selectedApp;
        this.requiresScalingFix = story.requiresScalingFix;
        this.fullWidth = story.fullWidth;
        this.showGameDialog = true;
      }
    }
  },
};
</script>

<style scoped>
@import "~vars";

.game {
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  overflow: hidden;

  &--loading {
    opacity: 0;
  }
}

>>> .v-treeview-node__label {
  white-space: normal !important;
}

>>> .v-dialog--active {
  overflow: hidden;
}
</style>
