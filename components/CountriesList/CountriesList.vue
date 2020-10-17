<template>
  <div>
    <ul>
      <li v-for="country in getCountries" :key="country.alpha3Code">
        {{ country.name }}
      </li>
    </ul>
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
