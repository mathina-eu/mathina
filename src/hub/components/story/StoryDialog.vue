<template>
  <v-card width="600">
    <div
      class="d-flex flex-no-wrap"
      :class="{'justify-space-between': alignment === 'right'}"
    >
      <v-avatar
        v-if="alignment === 'left'"
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
          v-text="displayName"
        />
        <v-card-text
          class="text-body-1"
          v-text="text"
        />
        <v-card-text
          v-if="exposition"
          class="text-body-1 font-italic"
          v-text="exposition"
        />
      </div>
      <v-avatar
        v-if="alignment === 'right'"
        class="ma-3"
        size="125"
        tile
      >
        <v-img :src="avatar" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import { GENERIC_CHAR } from './action-types';

export default {
  name: 'StoryDialog',
  props: {
    char: {
      type: String,
      required: true,
    },
    charName: {
      type: String,
      required: false,
      default: '',
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
    exposition: {
      type: String,
      required: false,
      default: '',
    },
    avatarAlign: {
      type: Object,
      required: false,
      default: () => {},
    }
  },
  computed: {
    avatar() {
      const mood = this.mood ? this.mood : 'normal';
      return `/portraits/${this.char}/${mood}00.data.png`;
    },
    displayName() {
      if (this.charName) {
        return this.charName;
      }
      if (this.char === GENERIC_CHAR) {
        return 'Sasha';
      }
      return this.char;
    },
    alignment() {
      console.log('align', this.avatarAlign);
      if (this.avatarAlign && this.avatarAlign[this.char]) {
        return this.avatarAlign[this.char];
      }
      return 'left';
    }
  },
};
</script>
