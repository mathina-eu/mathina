<template>
  <v-card
    width="600"
    elevation="5"
  >
    <v-card-title style="word-break: normal;">
      {{ text }}
    </v-card-title>
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
            class="game-cta"
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
            light
            color="grey lighten-5"
          >
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
            :src="url"
            class="game"
            :class="{'game--loading': isGameLoading && requiresScalingFix}"
            :style="iframeStyle"
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
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    requiresScalingFix: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      showGameDialog: false,
      iframeStyle: '',
      isGameLoading: true,
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
  },
  watch: {
    showGameDialog: {
      handler(isShown, wasShown) {
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
        this.iframeStyle = `left: ${(bodyWidth - elementWidth) / 2}px`;
        return false;
      }

      let ratio = bodyWidth / elementWidth;
      let newHeight = ratio * elementHeight;
      let rect = el.getBoundingClientRect();
      let horizontalOrigin = 'left';
      let offset = 0;
      if (newHeight > (bodyHeight - rect.y)) {
        ratio = (bodyHeight - rect.y) / elementHeight;
        offset = 0.5 * (bodyWidth - elementWidth * ratio);
      }
      let newElementWidth = Math.floor(elementWidth / ratio);
      let newElementHeight = Math.floor(elementHeight / ratio);

      this.iframeStyle = `left: ${offset}px; width: ${newElementWidth}px; height: ${newElementHeight}px; transform: scale(${ratio}); transform-origin: ${horizontalOrigin} top;`;
      this.$nextTick(() => {
        this.isGameLoading = false;
      });
    },
  },
};
</script>

<style scoped>
.game {
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  overflow: hidden;

  &--loading {
    opacity: 0;
  }
}

.game-cta {
  display: block !important;
  max-width: 100%;
  height: auto !important;

  >>> .v-btn__content {
    white-space: normal;
    padding: 1rem;
  }
}

>>> .v-dialog--active {
  overflow: hidden;
}
</style>
