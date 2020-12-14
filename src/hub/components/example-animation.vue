<template>
  <div class="container">
    <div class="container__mask">
      <div class="layer sun" />
      <div class="layer back" />
      <div class="layer mid" />
      <div class="layer front" />
    </div>
    <div class="layer clouds">
      <div class="clouds__cloud" />
      <div class="clouds__cloud clouds__cloud--offset" />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'ExampleAnimation',
  mounted() {
    // gsap.timeline()

    gsap.from(
      '.sun',
      {
        duration: 6,
        yPercent: 45,
      });
    gsap.from(
      '.back',
      {
        duration: 4,
        scaleY: 0.85,
        scaleX: 1.05,
        yPercent: 10,
        xPercent: -2,
      });
    gsap.from(
      '.mid',
      {
        duration: 4,
        yPercent: 2,
        scaleX: 1.05,
      });
    gsap.from(
      '.front',
      {
        duration: 3,
        scaleY: 0.95,
        yPercent: 5,
        xPercent: 2,
        scaleX: 1.05,
      });
    gsap.from(
      '.clouds',
      {
        duration: 15,
        scaleY: 0.95,
        xPercent: 20,
        yPercent: 5,
      });
    gsap.from(
      '.clouds__cloud--offset',
      {
        duration: 30,
        scaleY: 0.65,
        xPercent: 80,
        yPercent: 10,
      });
  },
};
</script>

<style scoped>
.container {
  min-width: 800px;
  height: 800px;
  margin: 0 auto;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;

  &__mask {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }
}

.layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.front {
  background: url('~assets/images/front.png') no-repeat center bottom;
  background-size: contain;
}

.mid {
  background: url('~assets/images/mid.png') no-repeat center bottom;
  background-size: contain;
  bottom: 5%;
}

.back {
  background: url('~assets/images/back.png') no-repeat center bottom;
  background-size: 110%;
  bottom: 15%;
}

.sun {
  width: 30%;
  height: 30%;
  max-width: 250px;
  max-height: 250px;
  background-color: #fff8e5;
  border-radius: 50%;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.9;
}

.clouds {
  bottom: 45%;
  height: 55%;
  overflow: visible;

  &__cloud {
    background: url('~assets/images/clouds.png') no-repeat center bottom;
    background-size: contain;
    width: 100%;
    height: 100%;

    &--offset {
      transform: translateY(-80%) translateX(-100%) scaleX(-1);
      background-size: 80%;
    }
  }
}
</style>
