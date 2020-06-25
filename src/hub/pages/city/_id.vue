<template>
  <v-row align="center">
    <v-col
      class="text-center"
      cols="12"
    >
      <h1 class="headline">
        {{ city.name }}
      </h1>
      <h2 class="subtitle-1">
        {{ $t('city.choose-story') }}
      </h2>
      <div
        :class="`citymap--${city.slug}`"
        class="citymap pa-4"
      >
        <div
          v-for="(story, i) in stories"
          :key="i"
          class="my-2"
        >
          <v-btn
            :to="localePath({ name: 'story-id', params: { id: story.id } })"
            style="width: 200px;"
            link
            nuxt
          >
            {{ story.title }}
          </v-btn>
        </div>
      </div>
      <v-btn
        :to="localePath('world')"
        nuxt
        link
      >
        Leave {{ city.name }}
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
      city: constants.CITIES[this.$route.params.id],
    };
  },
  computed: {
    stories() {
      return this.city.stories.map(storyId => {
        return {
          id: storyId,
          ...this.constants.STORIES[storyId],
        };
      });
    }
  },
};
</script>

<style scoped>
.citymap {
  margin: 16px auto;
  position: relative;
  width: 800px;
  height: 500px;
  background: url('~assets/worldmap.png') no-repeat;
  background-size: 300%;

  &--island {
    background-position-x: 100%;
    background-position-y: 100%;
  }

  &--birds-of-fire {
    background-position-x: 90%;
    background-position-y: 0;
  }

  &--logicity {
    background-position-x: 50%;
    background-position-y: 28%;
  }

  &--symmetry-fair {
    background-position-x: 10%;
    background-position-y: 0;
  }
}
</style>
