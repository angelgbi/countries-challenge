<template>
  <div class="country-page">
    <AppLink to="/">
      <div class="country-page__back">
        <span class="fa fa-long-arrow-left country-page__icon"></span>
        Back
      </div>
    </AppLink>
    <CountryDetail :country-info="country($route.params.name)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CountryPage',
  validate({ params, store }) {
    const country = store.getters['countries/getCountryByName'](params.name)
    return !!country
  },
  computed: {
    ...mapGetters({
      country: 'countries/getCountryByName',
    }),
  },
}
</script>
<style lang="scss">
.country-page {
  @apply px-3 pt-10;

  &__back {
    @apply shadow-lg rounded;
    @apply w-1/3 px-6 py-2 mb-16;
    @apply font-light text-sm;
    @apply flex flex-row justify-between items-center;
    background-color: var(--bg-secondary);
  }

  &__icon {
    @apply text-xl;
  }
}

@media only screen and (min-width: 1024px) {
  .country-page {
    @apply px-0 pt-16;

    &__back {
      @apply w-32 px-8 py-3;
      @apply text-base;
    }
  }
}
</style>
