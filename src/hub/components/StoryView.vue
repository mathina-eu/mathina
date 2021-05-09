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
  },
  data() {
    return {
      style: '',
    };
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
</style>
