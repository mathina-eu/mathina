<template>
  <v-row align="center">
    <v-col
      class="text-center"
      cols="12"
    >
      <h2>{{ story.title }}.</h2>
      <!--      <iframe-->
      <!--        :src="`http://localhost:3001/?locale=${$i18n.locale}`"-->
      <!--        class="app"-->
      <!--      />-->
      <h3>Choose a chapter:</h3>
      <div
        v-for="{ title, slug } in chapters"
        :key="slug"
        class="my-4"
      >
        <v-btn
          :to="localePath(`/story/${story.slug}/${slug}`)"
          color="primary"
          link
          nuxt
        >
          {{ title }}
        </v-btn>
      </div>
      <v-btn
        link
        nuxt
        :to="finishStoryLink"
      >
        Finish story
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import constants from '~/constants';
import yaml from 'js-yaml';

export default {
  async asyncData({ app, params }) {
    const story = constants.STORIES.find(({ slug }) => slug === params.id);
    const { data } = await app.$axios.get(`/stories/${story.id}/chapters.yaml`);
    const { chapters } = yaml.load(data);
    return {
      story,
      chapters: chapters.map(({ title, slug }) => ({ title, slug })),
    };
  },
  computed: {
    finishStoryLink() {
      return this.$store.state.city ? `/city/${this.$store.state.city.slug}` : '/';
    }
  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', [{ path: `/story/${this.story?.slug}`, text: this.story?.title }]);
  }
};
</script>

<style scoped>
  .app {
    border: none;
    width: 900px;
    height: 440px;
    overflow: hidden;
    display: block;
    margin: 10px auto;
  }
</style>
