<template>
  <v-card width="600">
    <div class="d-flex flex-no-wrap">
      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img :src="avatar" />
      </v-avatar>
      <div>
        <v-card-title
          class="headline"
          style="text-transform: capitalize;"
          v-text="char"
        />
        <v-card-text
          class="text-body-1"
          v-text="text"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'StoryDialog',
  props: {
    char: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: false,
      default: 'normal',
      // TODO: validate... define supported moods
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    avatar() {
      const mood = this.mood ? this.mood : 'normal';
      return `/portraits/${this.char}/${mood}00.data.png`;
    }
  },
};
</script>
