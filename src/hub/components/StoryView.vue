<template>
  <v-row align="center">
    <v-col
      class="text-center"
      cols="12"
    >
      <v-progress-circular
        v-if="isLoading"
        :size="150"
        :width="10"
        value="Loading"
        color="primary"
        indeterminate
      />
      <div
        v-else
        class="ratio"
      >
        <slot />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'StoryView',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style scoped>
.ratio {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: auto;
}

.ratio::before {
  content: '';
  width: 0;
  padding-bottom: calc(100% / (16 / 9)); /* Place any ratio here */
  grid-area: 1 / 1 / 1 / 1;
}

.ratio > *:first-child {
  grid-area: 1 / 1 / 1 / 1; /* the same as ::before */
}
</style>
