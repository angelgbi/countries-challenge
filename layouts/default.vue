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
  @apply px-4;
  @apply bg-very-light-gray;
}

@media only screen and (min-width: 1024px) {
  .main-container {
    @apply px-20;
  }
}
</style>
