<template>
  <div class="countries-list">
    <CountryListItem
      v-for="country in getCountries"
      :key="country.alpha3Code"
      :country-data="country"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CountriesList',
  computed: {
    ...mapGetters({
      getCountries: 'countries/getCountries',
    }),
  },
}
</script>

<style lang="scss">
.countries-list {
  @apply grid grid-cols-1 gap-10;
}

@media only screen and (min-width: $desktop-bp) {
  .countries-list {
    @apply grid-cols-4 gap-16;
  }
}
</style>
