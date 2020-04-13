<template>
  <v-row align="center">
    <example-animation />
    <v-col
      class="text-center"
      cols="12"
    >
      <h1 class="headline">
        {{ $t('index.title') }}
      </h1>
      <h2 class="subtitle-1">
        {{ $t('index.subtitle') }}
      </h2>
      <div
        v-for="[id, group] in Object.entries(constants.AGE_GROUPS)"
        :key="id"
        class="my-2"
      >
        <v-btn
          :color="`${$store.state.ageGroup === id ? 'primary' : 'default'}`"
          @click="setAgeGroupAndEnterWorld(id)"
          style="width: 200px;"
          link
        >
          {{ group.title }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import constants from '~/constants';
import ExampleAnimation from '~/components/example-animation';

export default {
  components: { ExampleAnimation },
  data() {
    return {
      constants,
    };
  },
  methods: {
    setAgeGroupAndEnterWorld(ageGroupId) {
      this.$store.dispatch('setAgeGroup', ageGroupId);
      this.$router.push({
        path: this.localePath('world'),
      });
    },
  }
};
</script>
