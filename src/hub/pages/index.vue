<template>
  <StoryView
    background="/splash_blur.jpg"
  >
    <Parallax class="overflow-hidden">
      <div class="layer background" />
      <div class="layer castle" />
      <div class="layer hills" />
      <div class="layer mathina" />
      <div class="layer leo" />
      <div class="splash-content">
        <svg
          class="ribbon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 157"
        >
          <defs>
            <path
              id="ribbon"
              d="M 82 97 S 102 57 232 83 S 431.67 78.5 431.67 78.5"
              fill="none"
            />
          </defs>
          <text>
            <textPath
              href="#ribbon"
              startOffset="50%"
              text-anchor="middle"
            >
              {{ $t('index.title') }}
            </textPath>
          </text>
        </svg>
      </div>
      <div class="layer clouds" />
      <div class="splash-content splash-content--start">
        <v-btn
          color="primary white--text"
          large
          link
          @click="setAgeGroupAndEnterWorld(0)"
        >
          {{ $t('index.start-exploring') }}
        </v-btn>
        <v-dialog
          v-model="dialog"
          width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              large
              link
              v-bind="attrs"
              v-on="on"
            >
              {{ $t('index.about') }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">
                {{ $t('index.title') }}
              </span>
            </v-card-title>
            <v-card-text
              style="font-size: 16px;"
              v-html="$t('index.aboutContent')"
            />
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                @click="dialog = false"
              >
                {{ $t('index.close') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </Parallax>
  </StoryView>
</template>

<script>
import constants from '~/constants';
import { gsap } from 'gsap';
import StoryView from '~/components/StoryView';
import Parallax from '~/components/Parallax';

export default {
  components: {
    Parallax,
    StoryView
  },
  data() {
    return {
      constants,
      dialog: false,
    };
  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', []);
    this.splashAnimations();
  },
  methods: {
    setAgeGroupAndEnterWorld(ageGroupId) {
      this.$store.dispatch('setAgeGroup', ageGroupId);
      this.$router.push({
        path: this.localePath('world'),
      });
    },
    splashAnimations() {
      gsap.from(
        '.background',
        {
          duration: 2,
          yPercent: 2,
          opacity: 0.5,
        });
      gsap.from(
        '.castle',
        {
          duration: 4,
          scaleY: 0.9,
          scaleX: 1.05,
          yPercent: 5,
          xPercent: -2,
        });
      gsap.from(
        '.mathina',
        {
          duration: 4,
          yPercent: 2,
          scaleX: 1.05,
        });
      gsap.from(
        '.leo',
        {
          duration: 4,
          yPercent: 2,
          scaleX: 1.05,
        });
      gsap.from(
        '.hills',
        {
          duration: 3,
          scaleY: 0.95,
          yPercent: 5,
          scaleX: 1.05,
        });
      gsap.from(
        '.clouds',
        {
          duration: 15,
          scaleY: 0.95,
          xPercent: 20,
          yPercent: 5,
        });
      gsap.from(
        '.clouds__cloud--offset',
        {
          duration: 30,
          scaleY: 0.65,
          xPercent: 80,
          yPercent: 10,
        });
    }
  }
};
</script>

<style scoped>
@import "~vars";

.splash-content {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 5;
  width: 70%;

  @media (--medium-and-up) {
    top: 10%;
    right: 10%;
    width: 45%;
  }

  &--start {
    top: 40%;
    z-index: 10;
  }
}

.layer {
  position: absolute;
  bottom: -2.5%;
  left: -2.5%;
  width: 105%;
  height: 105%;
}

.background {
  background: url('~assets/images/splash/background.jpg') no-repeat;
  background-size: cover;
}

.hills {
  background: url('~assets/images/splash/green_hills.png') no-repeat center bottom;
  background-size: contain;
}

.castle {
  background: url('~assets/images/splash/castle.png') no-repeat center bottom;
  background-size: contain;
  width: 60%;
  bottom: 2%;
  right: -2%;
  left: unset;
}

.mathina {
  background: url('~assets/images/splash/mathina.png') no-repeat center bottom;
  background-size: contain;
  width: 20%;
  height: 48%;
  bottom: 15%;
  left: 5%;
}

.leo {
  background: url('~assets/images/splash/leo.png') no-repeat center bottom;
  background-size: contain;
  width: 20%;
  height: 40%;
  bottom: 15%;
  left: 15%;
}

.clouds {
  background: url('~assets/images/splash/clouds.png') no-repeat center bottom;
  background-size: contain;
  width: 100%;
  height: 50%;
  top: 0;
}

.ribbon {
  background: url('~assets/images/splash/ribbon.png') no-repeat center bottom;
  background-size: contain;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-family: Newsreader, serif;
  font-weight: 600;
}
</style>
