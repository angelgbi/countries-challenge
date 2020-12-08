<template>
  <div class="country-detail">
    <img
      :src="countryInfo.flag"
      :alt="countryInfo.name"
      class="country-detail__flag"
    />
    <div class="country-detail__content">
      <h1 class="country-detail__name">{{ countryInfo.name }}</h1>
      <div class="country-detail__col">
        <p class="country-detail__info">
          <b>Native Name: </b>{{ countryInfo.nativeName }}
        </p>
        <p class="country-detail__info">
          <b>Population: </b>{{ formatPopulation(countryInfo.population) }}
        </p>
        <p class="country-detail__info">
          <b>Region: </b>{{ countryInfo.region }}
        </p>
        <p class="country-detail__info">
          <b>Sub Region: </b>{{ countryInfo.subregion }}
        </p>
        <p class="country-detail__info">
          <b>Capital: </b>{{ countryInfo.capital }}
        </p>
      </div>
      <div class="country-detail__col">
        <p class="country-detail__info">
          <b>Top Level Domain: </b>{{ countryDomains }}
        </p>
        <p class="country-detail__info">
          <b>Currencies: </b>{{ getStringElements(countryInfo.currencies) }}
        </p>
        <p class="country-detail__info">
          <b>Languages: </b>{{ getStringElements(countryInfo.languages) }}
        </p>
      </div>
      <BorderCountries
        :border-countries="countryInfo.borders"
        class="country-detail__borders"
      />
    </div>
  </div>
</template>

<script>
import { helperMixin } from '~/mixins'

export default {
  name: 'CountryDetail',
  mixins: [helperMixin],
  props: {
    countryInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    countryDomains() {
      return this.countryInfo.topLevelDomain
        .map((domain) => domain.replace(/['"]+/g, ''))
        .join(', ')
    },
  },
  methods: {
    getStringElements(elements) {
      return elements.map((element) => element.name).join(', ')
    },
  },
}
</script>

<style lang="scss">
.country-detail {
  @apply grid grid-cols-1 gap-10;

  &__content {
    @apply grid grid-cols-1 gap-10;
  }

  &__flag {
    @apply w-full h-56;
  }

  &__name {
    @apply font-extrabold text-2xl;
  }

  &__info {
    @apply font-light text-sm;
    @apply pb-3;

    > b {
      @apply font-semibold;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .country-detail {
    @apply grid-cols-2 gap-32;

    &__content {
      @apply grid-cols-2;
    }

    &__flag {
      @apply w-full h-full;
    }

    &__name {
      @apply text-3xl;
      @apply col-span-2;
      @apply mt-12;
    }

    &__borders {
      @apply col-span-2;
    }
  }
}
</style>
