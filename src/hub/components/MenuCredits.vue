<template>
  <div class="menu-credits">
    <v-list-item
      color="grey"
      class="menu-credits__title"
      :to="localePath('/contributors')"
      text
      nuxt
    >
      {{ $t('menu.credits') }}
    </v-list-item>
    <div class="menu-credits__disclaimer">
      {{ $t('menu.credits-disclaimer') }}
    </div>
    <div class="menu-credits__logo" />
  </div>
</template>
<script>
export default {
  name: 'MenuCredits',
};
</script>
<style scoped>
.menu-credits {
  padding: 0 1rem 1rem;

  &__title {
    font-size: 1rem;
    margin: 0 -1rem 1rem;
  }

  &__disclaimer {
    font-size: 0.75em;
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  &__logo {
    background: url('~assets/images/erasmus_programme.png') no-repeat center;
    width: 100%;
    height: 45px;
  }
}
</style>
