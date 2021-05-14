<template>
  <v-row align="center">
    <v-col
      class="text-center"
      :class="{'ratio-wrapper--scaled': fullWidth}"
      cols="12"
      :style="style"
    >
      <v-progress-circular
        v-if="isLoading"
        :size="150"
        :width="10"
        value="Loading"
        color="primary"
        indeterminate
      />
      <div
        v-else
        ref="ratio"
        class="ratio"
      >
        <slot />
      </div>
      <div
        v-if="!isLoading"
        class="background-blur"
        :style="setBg"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'StoryView',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
      required: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    background: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      style: '',
    };
  },
  computed: {
    setBg() {
      return {
        background: `url(${this.background})`
      };
    }
  },
  watch: {
    isLoading: {
      handler(isLoading, wasLoading) {
        if (!isLoading && wasLoading) {
          this.$nextTick(() => {
            this.setScaling();
          });
        }
      }
    }
  },
  mounted() {
    if (!this.isLoading) {
      this.$nextTick(() => {
        this.setScaling();
      });
    }
    window.addEventListener('resize', this.setScaling);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setScaling);
  },
  methods: {
    setScaling() {
      if (!this.fullWidth || this.isLoading) {
        return false;
      }
      let el = this.$refs.ratio;
      let elementWidth = el.clientWidth;
      let bodyWidth = document.body.clientWidth;
      if (!elementWidth || !bodyWidth) {
        return false;
      }
      let ratio = bodyWidth / elementWidth;
      this.style = `transform: scale(${ratio}); transform-origin: top;`;
    },
  }
};
</script>

<style scoped>
.ratio {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: auto;
  box-shadow: #0000000d 0 0 0 14px;
  position: relative;
  z-index: 1;
}

.ratio-wrapper {
  &--scaled {
    align-self: start;
    margin-top: -20px;
  }
}

.ratio::before {
  content: '';
  width: 0;
  padding-bottom: calc(100% / (16 / 9)); /* Place any ratio here */
  grid-area: 1 / 1 / 1 / 1;
}

.ratio > *:first-child {
  grid-area: 1 / 1 / 1 / 1; /* the same as ::before */
}

.background-blur {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(50px);
  z-index: 0;
  opacity: 0.55;
}
</style>
