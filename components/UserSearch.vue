<template>
  <div class="user-search">
    <span class="fa fa-search user-search__icon"></span>
    <input
      id="user-search"
      v-model="currentSearch"
      type="text"
      name="country-search"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import debounce from 'lodash/debounce'

export default {
  name: 'UserSearch',
  computed: {
    ...mapState({
      currentUserSearch: (state) => state.countries.currentUserSearch,
    }),
    currentSearch: {
      get() {
        return this.currentUserSearch
      },
      set: debounce(function (newSearch) {
        this.updateUserSearch(newSearch.trim())
      }, 300),
    },
  },
  methods: {
    ...mapActions({
      updateUserSearch: 'countries/updateUserSearch',
    }),
  },
}
</script>

<style lang="scss">
.user-search {
  @apply shadow rounded-md;
  @apply w-full py-5;
  @apply flex flex-row items-center;
  background-color: var(--bg-secondary);
  color: var(--color-input);

  > input {
    @apply font-light text-sm;
    @apply w-full;
    @apply outline-none;
    background-color: var(--bg-secondary);

    &::placeholder {
      color: inherit;
    }
  }

  &__icon {
    @apply text-lg;
    @apply px-8;
  }
}

@media only screen and (min-width: 1024px) {
  .user-search {
    @apply w-1/3;

    > input {
      @apply text-base;
    }
  }
}
</style>
