const set = key => (state, payload) => {
  state[key] = payload
}

export const state = () => ({
  hasOffers: null
})

export const getters = {
  hasOffers: state => state.hasOffers
}

export const mutations = {
  setHasOffers: set('hasOffers')
}
