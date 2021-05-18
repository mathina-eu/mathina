<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      disable-resize-watcher
      disable-route-watcher
      overlay-color="#f1f1f1"
      z-index="100"
      app
    >
      <v-list>
        <v-list-group
          color="grey darken-3"
          :prepend-icon="`mdi-history`"
          append-icon=""
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('menu.language') }} ({{ $i18n.locale }})
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group
            :value="activeLocale"
          >
            <v-list-item
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :value="locale.code"
              :to="switchLocalePath(locale.code)"
              link
            >
              <v-list-item-action>
                {{ locale.code }}
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ locale.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
        <v-row />
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
      <v-divider />
      <v-list-item
        color="grey"
        :to="localePath('/')"
        text
        nuxt
      >
        {{ $t('world.title') }}
      </v-list-item>
      <v-list-item
        color="grey"
        :to="localePath('/world/')"
        text
        nuxt
      >
        <v-list-item-content>
          <v-list-item-title>{{ $t('world.map') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="grey lighten-5"
      light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        :to="localePath('/')"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">
          <v-btn
            :to="localePath('/')"
            text
            nuxt
          >
            {{ $t('world.title') }}
          </v-btn>
          <template v-for="({ path, text, icon }) in $store.state.breadcrumbs">
            <v-icon :key="icon">mdi-chevron-right</v-icon>
            <v-btn
              :key="path"
              :to="localePath(path)"
              text
              nuxt
            >
              {{ text }}
            </v-btn>
          </template>
        </span>
      </v-toolbar-title>
      <v-spacer />
      <Logo class="header-logo" />
      <v-spacer class="hidden-md-and-up" />
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height align-start pa-0"
        fluid
      >
        <v-row
          justify="center"
          style="height: 100%;"
        >
          <nuxt />
        </v-row>
      </v-container>
    </v-main>
    <v-btn
      v-if="$store.state.isAssistModeOn"
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-help</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card class="pa-4">
        <v-card-title>
          Assistance is available
        </v-card-title>
        <v-row class="mx-auto">
          <v-col
            cols="12"
          >
            <v-card
              max-width="344"
            >
              <v-card-text>
                <div>Word of the Day</div>
                <p class="display-1 text--primary">
                  be•nev•o•lent
                </p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.<br>
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn
            link
            color="primary"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo';
export default {
  components: { Logo },
  data() {
    return {
      dialog: false,
      drawer: false,
      items: [
        { icon: 'mdi-contacts', text: this.$t('menu.select-age'), to: '/' },
        // {
        //   icon: 'mdi-chevron-up',
        //   'icon-alt': 'mdi-chevron-down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'mdi-plus', text: 'Create label' },
        //   ],
        // },
      ],
    };
  },
  computed: {
    isAssistModeOn: {
      set() {
        this.$store.dispatch('toggleAssistMode');
      },
      get() {
        return this.$store.state.isAssistModeOn;
      },
    },
    activeLocale: {
      get() {
        return this.$i18n.locale;
      }
    }
  },
};
</script>

<style scoped>
.header-logo {
  @media (min-width: 960px) {
    margin-right: -16px;
  }
  @media (max-width: 960px) {
    margin-left: -48px;
  }
}
</style>
