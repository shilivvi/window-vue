import {createStore} from "vuex";
import {saveStatePlugin} from "@/utils";

const token = localStorage.getItem('token') || null

const store = createStore({
  state: {
    token: token,
    windows: [],
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

  },
  plugins: [
    saveStatePlugin
  ]
})

export default store
