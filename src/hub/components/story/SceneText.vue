<template>
  <v-card
    class="scene-text"
    max-width="600"
    :style="styleText"
  >
    <v-card-text>
      <div v-html="text" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    styleText: {
      type: String,
      required: false,
      default: '',
    }
  },
};
</script>

<style scoped>
@import "~vars";

.scene-text {
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
