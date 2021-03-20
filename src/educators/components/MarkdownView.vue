<template>
  <div>
    <markdown-it-vue
      v-if="type === TYPE_MARKDOWN"
      ref="markdown"
      class="md-body"
      :content="content"
      :options="options"
    />
    <div
      v-else
      v-html="content"
    />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue';
import MarkdownVideo from './md-it-video-embed-plugin';
import { html5Media } from './markdown-it-image-and-video';
import MarkdownToc from 'markdown-it-table-of-contents';
import 'markdown-it-vue/dist/markdown-it-vue.css';

const TYPE_MARKDOWN = 'md';
const TYPE_HTML = 'html';

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
      TYPE_MARKDOWN,
      TYPE_HTML,
      content: '',
      type: TYPE_MARKDOWN,
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
    let { data } = await this.$axios.get(this.mdPath);
    if (data.startsWith('!HTML!')) {
      data = data.replace('!HTML!', '');
      this.type = TYPE_HTML;
    }
    this.content = data;
  }
};

</script>
