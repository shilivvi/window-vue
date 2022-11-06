import {createStore} from 'vuex';
import {saveStatePlugin} from '@/utils';
import axios from 'axios';

const user = localStorage.getItem('token') || []

const store = createStore({
  state: {
    user,
    windows: [
      {
        id: 0,
        name: 'Окно 1',
        details: {}
      }
    ],
    curId: 0,
    counterIds: 1
  },
  getters: {
    getToken(state){
      return state.user?.token
    }
  },
  mutations: {
    setNewWindow(state){
      const newWindow = {
        id: state.counterIds++,
        name: 'Окно ' + state.counterIds,
        details: {}
      }
      state.windows.push(newWindow)
    },
    setCurWindow(state, windowId){
      state.curId = windowId
      console.log('setCurWindow = ' + windowId)
    },
    delWindow(state, windowId){
      if(state.windows.length > 1){
        state.windows = state.windows.filter(window => window.id !== windowId)
        state.curId = state.windows[0].id
      }
    }
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
