<template>
  <div>
    <Header />
    <div class="main-container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
.main-container {
  @apply px-4 mt-2;
  @apply bg-very-light-gray;
}

@media only screen and (min-width: $desktop-bp) {
  .main-container {
    @apply px-20;
  }
}
</style>
