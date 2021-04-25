<template>
  <v-row align="center">
    <example-animation />
    <v-col
      class="text-center"
      cols="12"
    >
      <h1 class="splash-title">
        {{ $t('index.title') }}
      </h1>
      <v-btn
        class="mt-12"
        color="primary white--text"
        rounded
        x-large
        link
        @click="setAgeGroupAndEnterWorld(0)"
      >
        {{ $t('index.start-exploring') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import constants from '~/constants';
import ExampleAnimation from '~/components/example-animation';

export default {
  components: {
    ExampleAnimation
  },
  data() {
    return {
      constants,
    };
  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', []);
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

<style scoped>
.splash-title {
  font-size: 4rem;
  text-align: center;
  color: #fcedd8;
  font-family: 'Niconne', cursive;
  font-weight: 700;
  text-shadow: 5px 5px 0 #eb452b,
    10px 10px 0 #efa032,
    15px 15px 0 #46b59b,
    20px 20px 0 #017e7f,
    25px 25px 0 #052939,
    30px 30px 0 #c11a2b,
    35px 35px 0 #cf5965,
    40px 40px 0 #d8848b,
    45px 45px 0 #e1d2d2;
}
</style>
