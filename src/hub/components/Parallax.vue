<template>
  <ParallaxContainer class="parallax-container">
    <slot />
    <ParallaxElement
      class="layer"
      :offset="offsetBack"
    >
      <slot name="back1" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetBack + 5"
    >
      <slot name="back2" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetBack + 10"
    >
      <slot name="back3" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetMid"
    >
      <slot name="mid1" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetMid + 5"
    >
      <slot name="mid2" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetMid + 10"
    >
      <slot name="mid3" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetFront"
    >
      <slot name="front1" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetFront + 10"
    >
      <slot name="front2" />
    </ParallaxElement>
    <ParallaxElement
      class="layer"
      :offset="offsetFront + 15"
    >
      <slot name="front3" />
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
      default: 0,
    },
    offsetMid: {
      type: Number,
      default: 10,
    },
    offsetFront: {
      type: Number,
      default: 25,
    },
  },
};
</script>

<style scoped>

.parallax-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>
