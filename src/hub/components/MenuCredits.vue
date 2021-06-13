<template>
  <div class="menu-credits">
    <div class="menu-credits__title">
      Credits
    </div>
    <div class="menu-credits__disclaimer">
      This project has been funded with support from the European Commission. This publication reflects the views
      only of the author, and the Commission cannot be held responsible for any use which may be made of the
      information contained therein.
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
  padding: 1rem;

  &__title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
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
