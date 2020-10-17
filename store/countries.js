export const state = () => ({
  countries: [],
})

export const getters = {
  getCountries: (state) => state.countries,
  getCountryByCode: (state) => (code) => {
    return state.countries.find((country) => country.alpha3Code === code)
  },
}

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries
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
}
