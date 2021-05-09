<template>
  <div class="images-wrapper">
    <transition-group
      appear
      name="fade"
      tag="div"
    >
      <img
        v-for="image in images"
        :id="image.id"
        :key="`${image.src}${image.id}`"
        :src="image.src"
        :class="`images-wrapper__image--${image.position.horizontal} images-wrapper__image--vertical-${image.position.vertical}`"
        class="images-wrapper__image"
        :style="image.style"
      >
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'StoryImages',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.images-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;

  &__image {
    position: absolute;

    &--left {
      left: 1rem;
    }

    &--center {
      left: 50%;
      transform: translateX(-50%);
    }

    &--right {
      right: 1rem;
    }

    &--vertical-bottom {
      bottom: 1rem;
    }

    &--vertical-center {
      top: 50%;
      transform: translateY(-50%);
    }

    &--vertical-top {
      top: 1rem;
    }
  }
}

.images-wrapper__image--center.images-wrapper__image--vertical-center {
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
