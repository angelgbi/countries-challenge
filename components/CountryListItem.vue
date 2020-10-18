<template>
  <div class="country">
    <img
      :src="countryData.flag"
      :alt="countryData.name"
      class="country__flag"
    />
    <div class="country__content">
      <h1 class="country__name">{{ countryData.name }}</h1>
      <p class="country__info">
        <b>Population: </b>
        {{ formatPopulation }}
      </p>
      <p class="country__info"><b>Region: </b> {{ countryData.region }}</p>
      <p class="country__info"><b>Capital: </b> {{ countryData.capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryListItem',
  props: {
    countryData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatPopulation() {
      return Number(this.countryData.population).toLocaleString('en-US')
    },
  },
}
</script>

<style lang="scss">
.country {
  @apply mx-10;
  @apply rounded-md overflow-hidden;
  @apply shadow-md;

  &:hover {
    @apply shadow-xl cursor-pointer;
  }

  &__flag {
    @apply w-full h-40;
  }

  &__content {
    @apply py-8 px-6;
  }

  &__name {
    @apply font-extrabold text-base;
    @apply pb-6;
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
  .country {
    @apply mx-0;
    @apply transition transition-shadow duration-500 ease-in-out;
  }
}
</style>
