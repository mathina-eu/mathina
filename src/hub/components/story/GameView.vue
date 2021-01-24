<template>
  <v-card width="600">
    <v-toolbar
      color="primary"
      dark
    >
      <v-spacer />
      <v-toolbar-title>{{ text }}</v-toolbar-title>
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
            {{ cta }}
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
              @click="showGameDialog=false; $emit('lastGameFinished');"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ text }}</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="showGameDialog=false; $emit('lastGameFinished');"
              >
                Finish
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <iframe
            v-if="showGameDialog"
            :src="url"
            class="game"
          />
        </v-card>
      </v-dialog>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'GameAction',
  props: {
    text: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      showGameDialog: false,
    };
  },
};
</script>

<style scoped>
.game {
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  overflow: hidden;
}
</style>
