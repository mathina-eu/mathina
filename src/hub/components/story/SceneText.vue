<template>
  <v-card max-width="600">
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
  },
};
</script>
