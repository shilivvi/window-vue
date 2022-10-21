import {createStore} from "vuex";

const store = createStore({
  state: {
    token: null
  },
  getters: {
    getToken(state){
      return state.token
    }
  },
  actions: {

  },
  modules: {

  },
  mutations: {

  }
})

export default store
