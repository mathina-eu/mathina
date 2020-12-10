<template>
  <div class="container">
    <div class="container__mask">
      <Parallax>
        <img
          slot="back"
          src="~assets/parallax-example/sky.png"
        >
        <img
          slot="clouds"
          src="~assets/parallax-example/clouds.png"
        >
        <img
          slot="clouds-right"
          src="~assets/parallax-example/clouds2.png"
        >
        <img
          slot="mid"
          src="~assets/parallax-example/castle.png"
        >
        <template slot="front">
          <img src="~assets/parallax-example/grass.png">
          <div class="characters">
            <img class="character" src="~assets/parallax-example/Leo.png">
            <img class="character" src="~assets/parallax-example/Mathina.png">
          </div>
        </template>
      </Parallax>
    </div>
  </div>
</template>

<script>
import Parallax from '~/components/Parallax';

export default {
  components: { Parallax },
  data() {
    return {
      speed: 10,
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>

.container {
  min-width: 800px;
  max-width: 1400px;
  height: 80vh;
  margin: 10vh auto;

  &__mask {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }
}

.characters {
  position: absolute;
  bottom: 10%;
  left: 10%;
}
</style>
