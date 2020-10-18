<template>
  <div>
    <div class="filters">
      <UserSearch />
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
  @apply my-6;
  @apply flex flex-col;
}

@media only screen and (min-width: 1024px) {
  .filters {
    @apply my-12;
    @apply flex-row;
  }
}
</style>
