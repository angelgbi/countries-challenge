<template>
  <div class="header">
    <h1 class="header__title">Where in the world?</h1>
    <div
      v-if="isDark"
      class="header__theme-switch"
      @click="switchTheme('light')"
    >
      <span class="fa fa-moon-o"></span> Dark Mode
    </div>
    <div v-else class="header__theme-switch" @click="switchTheme('dark')">
      <span class="fa fa-moon-o"></span> Light Mode
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    switchTheme(theme) {
      this.$nuxt.$colorMode.preference = theme
      this.isDark = !this.isDark
    },
  },
}
</script>

<style lang="scss">
.header {
  @apply flex flex-row justify-between items-center;
  @apply py-8 px-4;
  @apply shadow-md z-10 relative;
  background-color: var(--bg-secondary);

  &__title {
    @apply text-base font-extrabold;
  }

  &__theme-switch {
    @apply font-semibold text-sm;
  }
}

@media only screen and (min-width: 1024px) {
  .header {
    @apply px-20;

    &__title {
      @apply text-2xl;
    }

    &__theme-switch {
      @apply text-base cursor-pointer;
    }
  }
}
</style>
