<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list>
        <v-list-group
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
            align="center"
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
          <v-list-item
            v-else
            :key="item.text"
            :to="localePath(item.to)"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('menu.select-age') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item
          dense
        >
          <v-list-item-content>
            <v-list-item-title class="pl-2">
              <v-switch
                v-model="isAssistModeOn"
                :label="$t('menu.assist-mode')"
                dense
                inset
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        :to="localePath('/')"
        style="width: 300px;"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">
          <v-btn
            :to="localePath('/')"
            text
            nuxt
          >
            Mathina
          </v-btn>
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height align-start"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <nuxt />
        </v-row>
      </v-container>
    </v-content>
    <v-btn
      v-if="$store.state.isAssistModeOn"
      @click="dialog = !dialog"
      bottom
      color="pink"
      dark
      fab
      fixed
      right
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
            @click="dialog = false"
            link
            color="primary"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      drawer: null,
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
        console.log(this.$i18n.locale);
        return this.$i18n.locale;
      }
    }
  },
};
</script>
