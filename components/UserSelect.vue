<template>
  <div class="user-select" @blur="toggleSelect">
    <div
      class="user-select__selected"
      :class="{ open: open }"
      @click="toggleSelect"
    >
      {{ regionSelected }}
      <span
        class="user-select__icon fa"
        :class="{ 'fa-chevron-down': !open, 'fa-chevron-up': open }"
      ></span>
    </div>
    <div class="user-select__items" :class="{ hidden: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        class="user-select__item"
        @click="optionSelected(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserSelect',
  data() {
    return {
      open: false,
      options: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    }
  },
  computed: {
    ...mapState({
      regionSelected: (state) =>
        state.countries.regionSelected
          ? state.countries.regionSelected
          : 'Filter by Region',
    }),
  },
  methods: {
    ...mapActions({
      updateCurrentRegion: 'countries/updateCurrentRegion',
    }),
    toggleSelect() {
      this.open = !this.open
    },
    optionSelected(option) {
      this.updateCurrentRegion(option)
      this.toggleSelect()
    },
  },
}
</script>

<style lang="scss">
.user-select {
  @apply mt-10 w-3/5 relative;

  &__selected {
    @apply shadow rounded-md cursor-pointer;
    @apply w-full py-5 px-6;
    @apply flex flex-row justify-between items-center;
    @apply font-semibold text-sm;
  }

  &__items {
    @apply absolute z-10;
    @apply shadow rounded-md;
    @apply w-full mt-2 pt-4 bg-white;
  }

  &__item {
    @apply font-semibold text-sm;
    @apply w-full px-6 pb-4;
    @apply cursor-pointer;
  }

  &__icon {
    @apply text-xs;
  }
}

@media only screen and (min-width: 1024px) {
  .user-select {
    @apply m-0 w-2/12;

    &__selected {
      @apply w-full;
    }
  }
}
</style>
