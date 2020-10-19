<template>
  <div>
    <div class="filters">
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
.filters {
  @apply mt-6 mb-8;
  @apply flex flex-col;
}

@media only screen and (min-width: 1024px) {
  .filters {
    @apply my-12;
    @apply flex-row justify-between items-center;
  }
}
</style>
