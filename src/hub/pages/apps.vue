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
            :src="game.url"
            class="game"
          />
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
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
      const story = { id: storyData.story, apps: [] };

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
          name: this.$t(`story.titles.${story.id}`),
          children: story.apps.map((app, index) => ({
            id: app.url,
            name: app.listTitle || app.toolbarText || app.text,
          })),
        });
      }
      return items;
    }
  },
  methods: {
    updateActive(appUrl) {
      let selectedApp = this.appMap[appUrl];
      if (selectedApp) {
        this.game = selectedApp;
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
}

>>> .v-treeview-node__label {
  white-space: normal !important;
}
</style>
