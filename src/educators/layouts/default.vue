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
          color="primary"
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
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
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
            {{ $t('edu.mathina-educators-repository') }}
          </v-btn>
          <v-btn
            v-for="({ path, text }, iteration) in $store.state.breadcrumbs"
            :key="path"
            :to="localePath(path)"
            :class="{'ml-4': iteration > 0}"
            text
            nuxt
          >{{ text }}</v-btn>
        </span>
      </v-toolbar-title>
      <v-spacer />
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
  </v-app>
</template>

<script>
export default {
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
    activeLocale: {
      get() {
        return this.$i18n.locale;
      }
    }
  },
};
</script>
