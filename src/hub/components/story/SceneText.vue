<template>
  <v-card
    max-width="600"
    :style="styleText"
  >
    <v-card-text class="text-body-1">
      <div v-html="text" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    styleText: {
      type: String,
      required: false,
      default: '',
    }
  },
};
</script>
