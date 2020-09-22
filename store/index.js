export const state = () => ({
  barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
  barImage:
    'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
  drawer: null,
})

export const getters = {
  getterValue: (state) => {
    return state.drawer
  },
}

export const mutations = {
  SET_BAR_IMAGE(state, payload) {
    state.barImage = payload
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload
  },
}

export const actions = {
  updateActionValue({ commit }, payload) {
    commit('updateValue', payload)
  },
}
