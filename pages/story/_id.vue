<template>
  <v-row align="center">
    <v-col
      class="text-center"
      cols="12"
    >
      <h2>{{ story.title }}.</h2>
      <iframe
        :src="`/example-app?locale=${$i18n.locale}`"
        class="app"
      />
      <v-btn
        @click="$router.back()"
        link
      >
        Finish story
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import constants from '~/constants';

export default {
  data() {
    return {
      constants,
      story: constants.STORIES[this.$route.params.id],
    };
  },
};
</script>

<style scoped>
  .app {
    border: none;
    width: 900px;
    height: 400px;
    overflow: hidden;
    display: block;
    margin: 10px auto;
  }
</style>
