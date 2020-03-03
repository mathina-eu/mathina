<template>
  <v-row align="center">
    <v-col
      class="text-center"
      cols="12"
    >
      <h1 class="headline">
        {{ $t('world.title') }}
      </h1>
      <h2 class="subtitle-1">
        {{ $t('world.help') }}
      </h2>
      <div class="worldmap">
        <v-btn
          v-for="[id, city] in Object.entries(constants.CITIES)"
          :key="id"
          :class="`worldmap__city--${id}`"
          :to="localePath({ name: 'city-id', params: { id } })"
          class="worldmap__city"
          nuxt
        >
          {{ city.name }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import constants from '~/constants';

export default {
  data() {
    return {
      constants,
    };
  },
};
</script>

<style scoped>
.worldmap {
  margin: 16px auto;
  position: relative;
  width: 800px;
  height: 500px;
  background: url('~assets/worldmap.png');
  background-size: cover;

  &__city {
    position: absolute;
    z-index: 10;

    &--island {
      bottom: 60px;
      right: 60px;
    }

    &--logicity {
      left: 395px;
      top: 240px;
    }

    &--birds-of-fire {
      top: 100px;
      right: 50px;
    }

    &--symmetry-fair {
      top: 100px;
      left: 140px;
    }
  }
}
</style>
