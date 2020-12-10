<template>
  <component
    :is="tag"
    :style="{ ...transform, ...transformParameters }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ParallaxElement',
  props: {
    offset: {
      type: Number,
      default: 10,
    },
    type: {
      type: String,
      default: 'translation',
    },
    tag: {
      type: String,
      default: 'div',
    },
    limitX: {
      type: Boolean,
      default: false,
    },
    limitY: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['context'],
  computed: {
    transform() {
      const { isHovering, mousePosition, shape } = this.context;

      if (!isHovering) {
        return;
      }

      const offset = this.offset;
      const relativeX = mousePosition.x - shape.left;
      const relativeY = mousePosition.y - shape.top;
      const movementX = ((relativeX - shape.width / 2) / (shape.width / 2)) * offset;
      const movementY = ((relativeY - shape.height / 2) / (shape.height / 2)) * offset;

      return {
        transform: `translate3d(${this.limitY ? 0 : -movementX}px, ${this.limitX ? 0 : -movementY}px, 0)`
      };
    },
    transformParameters() {
      return {
        transitionProperty: 'transform',
        transitionDuration: this.transitionDuration,
        transformOrigin: 'center',
        transitionTimingFunction: this.transitionTimingFunction,
      };
    },
    transitionDuration() {
      const { animationDuration, didEnter } = this.context;
      const durationException = animationDuration > 400 ? animationDuration : 400;
      const duration = didEnter ? animationDuration : durationException;
      return `${duration}ms`;
    },
    transitionTimingFunction() {
      return this.context.easing;
    },
  },
};
</script>
