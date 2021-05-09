<template>
  <StoryView>
    <div class="worldmap">
      <v-menu
        v-for="city in cities"
        :key="city.id"
        rounded="b x1"
        offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            :class="`white--text worldmap__city--${city.id}`"
            :color="city.colorScheme"
            elevation="1"
            class="worldmap__city"
            v-bind="attrs"
            v-on="on"
          >
            {{ city.name }}
          </v-btn>
        </template>
        <v-list
          class="blue--background"
          nav
          dense
        >
          <v-subheader>Stories</v-subheader>
          <v-list-item
            v-for="story in city.stories"
            :key="story.id"
            :to="localePath({ name: 'story-slug', params: { slug: story.slug } })"
            :ripple="true"
            link
            nuxt
          >
            <v-list-item-icon>
              <v-icon small>
                {{ `mdi-numeric-${story.ageMeta.icon}-circle` }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="$t(`story.titles.${story.id}`)" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </StoryView>
</template>

<script>
import constants from '~/constants';
import StoryView from '~/components/StoryView';

export default {
  components: {
    StoryView,
  },
  computed: {
    cities() {
      return Object.values(constants.CITIES).map(city => {
        return {
          ...city,
          stories: city.stories.map(storyId => this.getStoryData(storyId))
        };
      });
    }
  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', [{ path: '/world', text: 'World Map' }]);
  },
  methods: {
    getStoryData(storyId) {
      return { ...constants.STORIES.find(({ id }) => storyId === id) };
    }
  },
};
</script>

<style scoped>
.worldmap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('~assets/worldmap.png');
  background-size: cover;

  &__city {
    position: absolute;
    z-index: 7;

    &--island {
      bottom: 22%;
      right: 3%;
    }

    &--logicity {
      left: 45.5%;
      top: 51%;
    }

    &--birds-of-fire {
      top: 24%;
      right: 17%;
    }

    &--symmetry-fair {
      top: 21%;
      left: 17%;
    }
  }
}
</style>
