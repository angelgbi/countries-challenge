<template>
  <div class="countries-page">
    <div class="countries-page__filters">
      <UserSearch />
      <UserSelect />
    </div>
    <CountriesList />
  </div>
</template>

<script>
export default {
  name: 'CountriesPage',
}
</script>

<style lang="scss">
.countries-page {
  @apply pt-6;

  &__filters {
    @apply mb-8;
    @apply flex flex-col;
  }
}

@media only screen and (min-width: 1024px) {
  .countries-page {
    @apply pt-12;

    &__filters {
      @apply mb-12;
      @apply flex-row justify-between items-center;
    }
  }
}
</style>
