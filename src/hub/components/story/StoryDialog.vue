<template>
  <v-card
    width="600"
    :style="styleText"
  >
    <div
      class="d-flex flex-no-wrap dialog"
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
          class="dialog__char-name"
          v-text="charName ? charName : $t(`chars.${displayName}`)"
        />
        <v-card-text
          class="dialog__content"
          v-text="text"
        />
        <v-card-text
          v-if="exposition"
          class="dialog__exposition"
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
    },
    styleText: {
      type: String,
      required: false,
      default: '',
    },
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
        return 'jane';
      }
      return this.char;
    },
    alignment() {
      if (this.avatarAlign && this.avatarAlign[this.char]) {
        return this.avatarAlign[this.char];
      }
      return 'left';
    }
  },
};
</script>

<style scoped>
@import "~vars";

.dialog {
  &__char-name {
    color: var(--text-color);
    font-size: 1.75em;
    font-weight: 600;
    padding: 1.25rem 1rem;
  }

  &__content {
    color: var(--text-color);
    font-family: var(--story-font-family);
    font-size: 1.125em;
  }

  &__exposition {
    color: var(--text-color-light);
    font-size: 1em;
    font-style: italic;
    padding-top: 0;
  }
}
</style>
