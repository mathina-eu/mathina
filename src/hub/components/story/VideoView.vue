<template>
  <v-card
    class="scene-text"
  >
    <v-card-text>
      <h2
        v-if="text"
        class="scene-text__title"
      >
        {{ text }}
      </h2>
      <video
        controls
        :width="width"
        :poster="image"
      >
        <source
          v-for="e in entries"
          :key="e.src"
          :src="e.path"
          :type="e.type"
        >
      </video>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: [Number, String],
      required: false,
      default: 600,
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    entries: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "~vars";

.scene-text {
  &__title {
    margin-bottom: 1rem;
  }

  >>> .v-card__text {
    font-family: Newsreader, serif;
    font-size: 1.125em;
    color: var(--text-color);

    .v-card__text {
      color: var(--text-color);
    }
  }
}
</style>
