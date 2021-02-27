<template>
  <markdown-it-vue
    ref="markdown"
    class="md-body"
    :content="content"
    :options="options"
  />
</template>

<script>
import MarkdownItVue from 'markdown-it-vue';
import MarkdownVideo from './md-it-video-embed-plugin';
import { html5Media } from 'markdown-it-html5-media';
import MarkdownToc from 'markdown-it-table-of-contents';
import 'markdown-it-vue/dist/markdown-it-vue.css';

export default {
  components: {
    MarkdownItVue,
  },
  props: {
    mdPath: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      content: '',
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      },
    };
  },
  async mounted() {
    this.$refs.markdown.use(html5Media);
    this.$refs.markdown.use(MarkdownToc, { includeLevel: [1,2,3] });
    this.$refs.markdown.use(MarkdownVideo);
    const { data } = await this.$axios.get(this.mdPath);
    this.content = data;
  }
};

</script>
