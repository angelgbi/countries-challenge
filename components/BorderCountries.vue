<template>
  <div v-if="borderCountries.length" class="border-countries">
    <h3 class="border-countries__title">Border Countries:</h3>
    <ul class="border-countries__list">
      <li
        v-for="countryCode in borderCountries"
        :key="countryCode"
        class="border-countries__item"
      >
        <AppLink
          :to="`/country/${countryBorder(countryCode).name.toLowerCase()}`"
        >
          {{ countryBorder(countryCode).name }}
        </AppLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BorderCountries',
  props: {
    borderCountries: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      countryBorder: 'countries/getCountryByCode',
    }),
  },
}
</script>

<style lang="scss">
.border-countries {
  @apply flex flex-col;
  @apply pb-16;

  &__title {
    @apply font-bold text-base;
  }

  &__list {
    @apply flex flex-row flex-wrap justify-start;
  }

  &__item {
    @apply font-light text-xs text-center;
    @apply shadow-lg rounded;
    @apply w-auto py-2 px-4 mt-6 mr-3;
    background-color: var(--bg-secondary);
  }
}

@media only screen and (min-width: 1024px) {
  .border-countries {
    @apply flex-row flex-no-wrap items-center;
    @apply p-0;

    &__title {
      @apply pr-3;
    }

    &__item {
      @apply mt-0 mb-2;
    }
  }
}
</style>
