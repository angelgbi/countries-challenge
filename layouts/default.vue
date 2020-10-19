<template>
  <div class="app">
    <Header />
    <div class="main-container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
.app {
  @apply min-h-screen;
}

.main-container {
  @apply px-4;
  background-color: var(--bg);
}

@media only screen and (min-width: 1024px) {
  .app {
    @apply max-w-screen-xl mx-auto;
  }

  .main-container {
    @apply px-20;
  }
}
</style>
