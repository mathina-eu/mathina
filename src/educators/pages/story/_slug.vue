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

    return {
      mdPath: `/stories/${story.id}/content.md`,
    };
  },
};

</script>
