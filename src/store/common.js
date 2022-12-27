export default {
  state: {
    Theme: false,
    SideShow: true,
  },
  getters: {
    THEME_STATUS (state) {
      return state.Theme
    },
    SIDE_STATUS (state) {
      return state.SideShow
    }
  },
  actions: {
    SHOW_SIDE ({ commit }) {
      commit ('CHENGE_SIDE_STATUS')
    },
    THEME ({ commit }) {
      commit ('CHENGE_THEME_STATUS')
    }
  },
  mutations: {
    CHENGE_SIDE_STATUS (state) {
      console.log('side visible')
      state.SideShow = !state.SideShow
    },
    CHENGE_THEME_STATUS (state) {
      console.log('chenge theme')
      state.Theme = !state.Theme
    }
  }
}
