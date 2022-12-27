export default {
  state: {
    items: 25,
    item: {}
  },
  getters: {
    ITEM (state) {
      return state.item
    }
  },
  actions: {
    ITEM_FOR_SIDE({ commit }, Item){
      commit('GET_ITEM', Item)
    }
  },
  mutations: {
    GET_ITEM (state, Item) {
      state.item = Item
      console.log(state.item)
    }
  }

}