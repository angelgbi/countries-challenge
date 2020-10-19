import cloneDeep from 'lodash/cloneDeep'

export const state = () => ({
  countries: [],
  currentUserSearch: '',
  regionSelected: '',
})

export const getters = {
  getCountries: (state) => {
    let countries = cloneDeep(state.countries)

    // Filter by Region
    if (state.regionSelected) {
      countries = countries.filter(
        (country) => country.region === state.regionSelected
      )
    }

    // Filter by user search
    if (state.currentUserSearch) {
      countries = countries.filter((country) =>
        country.name
          .toLowerCase()
          .includes(state.currentUserSearch.toLowerCase())
      )
    }
    return countries
  },
  getCountryByCode: (state) => (code) => {
    return state.countries.find((country) => country.alpha3Code === code)
  },
}

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  },
  UPDATE_USER_SEARCH(state, newUserSearch) {
    state.currentUserSearch = newUserSearch
  },
  UPDATE_REGION(state, regionSelected) {
    state.regionSelected = regionSelected
  },
}

export const actions = {
  async fetchCountries({ commit }) {
    try {
      const countries = await this.$axios.$get('/all')
      commit('SET_COUNTRIES', countries)
    } catch (error) {
      console.error('[Fetch countries]: ', error)
    }
  },
  async fetchCountryByName({ commit }, countryCode) {
    try {
      const country = await this.$axios.$get(`/alpha/${countryCode}`)
      commit('SET_COUNTRIES', [country])
    } catch (error) {
      console.error('[Fetch country]: ', error)
    }
  },
  updateUserSearch({ commit }, newUserSearch) {
    commit('UPDATE_USER_SEARCH', newUserSearch)
  },
  updateCurrentRegion({ commit }, region) {
    commit('UPDATE_REGION', region)
  },
}
