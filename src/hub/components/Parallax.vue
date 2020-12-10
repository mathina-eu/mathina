<template>
  <ParallaxContainer class="parallax-container">
    <ParallaxElement
      class="back"
      :offset="offsetBack"
    >
      <slot name="back" />
    </ParallaxElement>
    <ParallaxElement
      class="front"
      :offset="offsetFront"
    >
      <slot name="front" />
    </ParallaxElement>
    <ParallaxElement
      class="mid"
      :offset="offsetMid"
    >
      <slot name="mid" />
    </ParallaxElement>
    <ParallaxElement
      class="front"
      :offset="offsetFront"
    >
      <slot name="front" />
    </ParallaxElement>
    <ParallaxElement
      class="clouds"
      :offset="offsetClouds"
    >
      <slot name="clouds" />
    </ParallaxElement>
    <ParallaxElement
      class="clouds clouds--right"
      :offset="offsetClouds * 2"
    >
      <slot name="clouds-right" />
    </ParallaxElement>
  </ParallaxContainer>
</template>

<script>
import ParallaxContainer from '~/components/parallax/ParallaxContainer';
import ParallaxElement from '~/components/parallax/ParallaxElement';

export default {
  name: 'Parallax',
  components: {
    ParallaxElement,
    ParallaxContainer
  },
  props: {
    offsetBack: {
      type: Number,
      default: 10,
    },
    offsetMid: {
      type: Number,
      default: 25,
    },
    offsetFront: {
      type: Number,
      default: 50,
    },
    offsetClouds: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>

.parallax-container {
  position: relative;
  width: 100%;
  height: 100%;

  >>> img {
    max-width: 104%;
    margin: -2%;
  }
}

.front {
  position: absolute;
  bottom: -5%;
  left: -2%;
  right: -2%;
}

.mid {
  position: absolute;
  bottom: 5%;
  right: -5%;
}

.back {
  width: 100%;
  height: 100%;
  z-index: -2;
  position: absolute;
}

.clouds {
  top: 10%;
  position: absolute;

  &--right {
    right: 0;
  }
}
</style>
