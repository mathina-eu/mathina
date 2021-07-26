<template>
  <div>
    <section class="header">
      <logo width="250px" height="auto"/>
      <v-list-item-group
        :value="activeLocale"
        class="language-selection"
      >
        <v-list-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :value="locale.code"
          :to="switchLocalePath(locale.code)"
          link
        >
          <v-list-item-content>
            {{ locale.code }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </section>
    <div class="slider">
      <div class="container">
        <section class="slider__item">
          <h1 class="slider__title">
            {{ $t('landing.headline') }}
          </h1>
          <div class="slider__image">
            <slider-image />
          </div>
        </section>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <section class="buttons-section">
          <a
            class="button button--big"
            :href="$t('landing.bigButtonLink')"
            target="_blank"
          >{{ $t('landing.bigButton') }}</a>
        </section>
<!--        <section class="buttons-section buttons-section&#45;&#45;secondary">-->
<!--          <a-->
<!--            class="button button&#45;&#45;secondary"-->
<!--            :href="$t('landing.eduButtonLink')"-->
<!--            target="_blank"-->
<!--          >Educator’s guide</a>-->
<!--          <a-->
<!--            class="button button&#45;&#45;secondary"-->
<!--            :href="$t('landing.shareButtonLink')"-->
<!--            target="_blank"-->
<!--          >{{ $t('landing.shareButton') }}</a>-->
<!--        </section>-->
        <div class="separator" />
        <section v-html="$t('landing.firstSection')" />
        <section class="video-section">
          <div class="video-container">
            <iframe
              :src="$t('landing.videoLink')"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section v-html="$t('landing.secondSection')" />
        <div class="separator" />
        <section class="partners">
          <p
            class="text--small"
            v-html="$t('landing.logoSectionText')"
          >
            Mathina is realized in the framework of an Erasmus+ project between 2019-2021. <br>
            Five partners collaborate to realize Mathina:
          </p>
          <a href="https://www.atractor.pt/">
            <img class="partners__image"
                 width="133"
                 height="157"
                 src="~assets/images/atractor.png"
            >
          </a>
          <span class="partners__name">Atractor (Portugal)</span>
          <a href="https://bragi.si/">
            <img class="partners__image"
                 width="93"
                 height="62"
                 src="~assets/images/bragi.png"
            >
          </a>
          <span class="partners__name">Bragi Vizualne Komunikacije (Slovenia)</span>
          <a href="https://www.curvilinea.org/">
            <img class="partners__image"
                 width="178"
                 height="75"
                 src="~assets/images/curvilinea.png"
            >
          </a>
          <span class="partners__name">Curvilinea Società Cooperativa (Italy)</span>
          <a href="http://www.elmenymuhely.hu/">
            <img class="partners__image"
                 width="111"
                 height="111"
                 src="~assets/images/experience_workshop.png"
            >
          </a>
          <span class="partners__name">Experience Workshop (Finland)</span>
          <a href="https://imaginary.org/">
            <img class="partners__image"
                 width="138"
                 height="29"
                 src="~assets/images/imaginary.png"
            >
          </a>
          <span class="partners__name">IMAGINARY (Germany)</span>
        </section>
        <div class="separator"></div>
        <section  v-html="$t('landing.footerSection')" />
        <section
          class="footer-section"
          v-html="$t('landing.footerLinks')"
        />
      </div>
    </div>
    <section class="footer">
      <div class="footer__text">
        {{ $t('disclaimer') }}
      </div>
      <div class="footer__image">
        <img width="193"
             height="44"
             src="~assets/images/erasmus_programme.png"
        >
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import SliderImage from '../components/sliderImage';

export default {
  components: {
    SliderImage,
    Logo,
  }
};
</script>
