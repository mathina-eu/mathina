<template>
  <ContributorsContent />
</template>

<script>
import ContributorsContent from '~/components/contributorsContent';

export default {
  components: { ContributorsContent  },
  mounted() {
    this.$store.dispatch('setBreadcrumbs', [{ path: '/contributors', text: this.$t('contributors.title') }]);
  },
  methods: {
  }
};
</script>
