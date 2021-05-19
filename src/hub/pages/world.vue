<template>
  <StoryView
    background="/map_blur.jpg"
  >
    <Parallax class="overflow-hidden">
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
              {{ $t(`cities.${city.id}`) }}
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
      <template #back1>
        <div class="map-background" />
      </template>
      <template #back2>
        <div class="castle" />
        <div class="wizzard" />
        <div class="pub" />
        <div class="market" />
      </template>
      <template #mid1>
        <div class="mathina-leo" />
        <div class="flamma" />
        <div class="dragon" />
        <div class="phoenix" />
        <div class="forest" />
        <div class="traffic" />
        <div class="owl" />
        <div class="thief" />
        <div class="stadium" />
        <div class="toys" />
        <div class="stalls" />
        <div class="frieze" />
        <div class="carousel" />
        <div class="tree" />
        <div class="parrot" />
        <div class="chest" />
        <div class="mysterious-figure" />
      </template>
    </Parallax>
  </StoryView>
</template>

<script>
import constants from '~/constants';
import StoryView from '~/components/StoryView';
import Parallax from '~/components/Parallax';


export default {
  components: {
    StoryView,
    Parallax,
  },
  computed: {
    cities() {
      return Object.values(constants.CITIES).map(city => {
        return {
          ...city,
          stories: city.stories.map(storyId => this.getStoryData(storyId))
        };
      });
    },
    stories() {
      return this.city.stories.map(storyId => {
        return {
          ...constants.STORIES.find(({ id }) => storyId === id),
        };
      });
    },
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
  &__city {
    position: absolute;
    z-index: 7;

    &--island {
      bottom: 3%;
      right: 23%;
    }

    &--logicity {
      top: 49%;
      right: 29%;
    }

    &--birds-of-fire {
      top: 3%;
      left: 2%;
    }

    &--symmetry-fair {
      left: 17%;
      bottom: 35%;
    }
  }
}

.map-background {
  background: url('~assets/images/map/background.jpg');
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

.mathina-leo {
  position: absolute;
  width: 18%;
  height: 25%;
  left: 41%;
  top: 39%;
  background: url('~assets/images/map/mathina_leo.png') no-repeat center;
  background-size: contain;
}

.flamma {
  position: absolute;
  width: 8%;
  height: 17%;
  left: 11%;
  top: 29%;
  background: url('~assets/images/map/flamma.png') no-repeat center;
  background-size: contain;
}

.forest {
  position: absolute;
  width: 8%;
  height: 22%;
  left: 0.2%;
  top: 31%;
  background: url('~assets/images/map/forest.png') no-repeat center;
  background-size: contain;
}

.dragon {
  position: absolute;
  width: 10%;
  height: 23%;
  left: 32%;
  top: 33%;
  background: url('~assets/images/map/dragon.png') no-repeat center;
  background-size: contain;
}

.castle {
  position: absolute;
  width: 17%;
  height: 16%;
  left: 17%;
  top: 23%;
  background: url('~assets/images/map/castle.png') no-repeat center;
  background-size: contain;
}

.phoenix {
  position: absolute;
  width: 21%;
  height: 24%;
  left: 12%;
  top: 1%;
  background: url('~assets/images/map/phoenix.png') no-repeat center;
  background-size: contain;
}

.carousel {
  position: absolute;
  width: 14%;
  height: 28%;
  left: 1%;
  bottom: 9%;
  background: url('~assets/images/map/carousel.png') no-repeat center;
  background-size: contain;
}

.wizzard {
  position: absolute;
  width: 9%;
  height: 29%;
  left: 15%;
  bottom: 2%;
  background: url('~assets/images/map/wizzard.png') no-repeat center;
  background-size: contain;
}

.toys {
  position: absolute;
  width: 12%;
  height: 20%;
  left: 25%;
  bottom: 12%;
  background: url('~assets/images/map/toys.png') no-repeat center;
  background-size: contain;
}

.stalls {
  position: absolute;
  width: 15%;
  height: 22%;
  left: 34%;
  bottom: 21%;
  background: url('~assets/images/map/stalls.png') no-repeat center;
  background-size: contain;
}

.frieze {
  position: absolute;
  width: 19%;
  height: 22%;
  left: 0;
  bottom: -4%;
  background: url('~assets/images/map/frieze.png') no-repeat center;
  background-size: contain;
}

.pub {
  position: absolute;
  width: 12%;
  height: 21%;
  right: 34%;
  bottom: 15%;
  background: url('~assets/images/map/pub.png') no-repeat center;
  background-size: contain;
}

.market {
  position: absolute;
  width: 14%;
  height: 14%;
  right: 20%;
  bottom: 18%;
  background: url('~assets/images/map/market.png') no-repeat center;
  background-size: contain;
}

.parrot {
  position: absolute;
  width: 4%;
  height: 9%;
  right: 30%;
  bottom: 12%;
  background: url('~assets/images/map/parrot.png') no-repeat center;
  background-size: contain;
}

.chest {
  position: absolute;
  width: 7%;
  height: 8%;
  right: 12%;
  bottom: 16%;
  background: url('~assets/images/map/chest.png') no-repeat center;
  background-size: contain;
}

.mysterious-figure {
  position: absolute;
  width: 6%;
  height: 11%;
  right: 17%;
  bottom: 29%;
  background: url('~assets/images/map/mysterious_figure.png') no-repeat center;
  background-size: contain;
}

.tree {
  position: absolute;
  width: 15%;
  height: 28%;
  right: -4%;
  bottom: 15%;
  background: url('~assets/images/map/tree.png') no-repeat center;
  background-size: contain;
}

.stadium {
  position: absolute;
  width: 19%;
  height: 27%;
  right: 37%;
  bottom: 68%;
  background: url('~assets/images/map/stadium.png') no-repeat center;
  background-size: contain;
}

.owl {
  position: absolute;
  width: 14%;
  height: 28%;
  right: 27%;
  bottom: 49%;
  background: url('~assets/images/map/owl.png') no-repeat center;
  background-size: contain;
}

.traffic {
  position: absolute;
  width: 12%;
  height: 40%;
  right: 8%;
  bottom: 47%;
  background: url('~assets/images/map/traffic.png') no-repeat center;
  background-size: contain;
}

.thief {
  position: absolute;
  width: 14%;
  height: 18%;
  right: 0;
  bottom: 44%;
  background: url('~assets/images/map/thief.png') no-repeat center;
  background-size: contain;
}
</style>
