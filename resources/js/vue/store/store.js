import {createStore} from 'vuex';
import {saveStatePlugin} from '@/utils';
import axios from 'axios';

const user = localStorage.getItem('token') || []

const store = createStore({
  state: {
    user,
    windows: [],
  },
  getters: {
    getToken(state){
      return state.user?.token
    }
  },
  mutations: {

  },
  actions: {
    login({commit}, credentials) {
      return axios.post(
        'http://window-vue/api/v1/login',
        {
          email: credentials.email,
          password: credentials.password
        }
      )
        .then((response) => {
          console.log('okey');
        })
    }
  },
  modules: {

  },
  plugins: [
    saveStatePlugin
  ]
})

export default store
