<template>
  <v-row>
    <v-col
      cols="8"
      offset="2"
    >
      <MarkdownView :md-path="mdPath" />
    </v-col>
  </v-row>
</template>

<script>
import MarkdownView from '@/components/MarkdownView';
import constants from '~/constants';

export default {
  components: {
    MarkdownView
  },
  data() {
    const story = constants.STORIES.find(({ slug }) => slug === this.$route.params.slug);
    const locale = this.$i18n.locale === this.$i18n.defaultLocale ? '' : `-${this.$i18n.locale}`;

    return {
      mdPath: `stories/${story.id}/content${locale}.md`,
      story,
    };
  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', [
      { path: `/world/`, text: this.$t(`world.map`) },
      { path: `/story/${this.story?.slug}/`, text: this.$t(`story.titles.${this.story.id}`) },
    ]);
  }
};
</script>
