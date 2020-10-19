export const helperMixin = {
  methods: {
    formatPopulation(population) {
      return Number(population).toLocaleString('en-US')
    },
  },
}
