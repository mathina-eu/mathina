<template>
  <v-card
    width="600"
    elevation="5"
  >
    <v-card-title>{{ text }}</v-card-title>
    <div
      v-if="imgPath"
      class="d-flex flex-column justify-space-between align-center"
    >
      <v-img
        :height="img.height"
        :width="img.width"
        :src="imgPath"
      />
    </div>
    <v-card-actions
      class="py-8"
    >
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
            <img
              v-if="toolbarImgPath"
              class="mr-4"
              :height="toolbarImg.height"
              :width="toolbarImg.width"
              :src="toolbarImgPath"
            >
            <v-toolbar-title>{{ textInToolbar }}</v-toolbar-title>
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
    toolbarText: {
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
    },
    img: {
      type: Object,
      required: false,
      default: () => {},
    },
    toolbarImg: {
      type: Object,
      required: false,
      default: () => {},
    },
    imgRoot: {
      type: String,
      required: false,
      default: '',
    }
  },
  data() {
    return {
      showGameDialog: false,
    };
  },
  computed: {
    imgPath() {
      if (!this.img?.src) {
        return '';
      }
      return `${this.imgRoot}/${this.img.src}`;
    },
    toolbarImgPath() {
      if (!this.toolbarImg?.src) {
        return '';
      }
      return `${this.imgRoot}/${this.toolbarImg.src}`;
    },
    textInToolbar() {
      return this.toolbarText || this.text;
    },
  }
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
