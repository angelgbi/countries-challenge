<template>
  <div class="header">
    <h1 class="header__title">Where in the world?</h1>
    <div class="header__theme-switch">Dark Mode</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  @apply flex flex-row justify-between items-center;
  @apply py-8 px-4;
  @apply shadow-md;

  &__title {
    @apply text-base font-extrabold;
  }

  &__theme-switch {
    @apply font-semibold text-sm;
  }
}

@media only screen and (min-width: $desktop-bp) {
  .header {
    @apply px-20;

    &__title {
      @apply text-2xl;
    }

    &__theme-switch {
      @apply text-base;
    }
  }
}
</style>
