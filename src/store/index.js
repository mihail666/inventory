import { createStore } from 'vuex'
import common from './common'
import item from './item'
export default createStore({
  modules: {
    common,
    item
  }
})
