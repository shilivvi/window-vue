import {createStore} from 'vuex';
import {saveStatePlugin} from '@/utils';
import axios from 'axios';

const defaultNewWindow = {
  id: 0,
  name: 'Окно 1',
  width: 500,
  height: 500,
  details: {}
}

const user = localStorage.getItem('token') || []

const store = createStore({
  state: {
    user,
    windows: [
      {
        id: 0,
        name: 'Окно 1',
        width: 500,
        height: 500,
        quantity: 1,
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
      const newWindow = {}
      Object.assign(newWindow, defaultNewWindow);
      newWindow.id = state.counterIds++
      newWindow.name = 'Окно ' + state.counterIds
      state.windows.push(newWindow)
    },
    setCurWindow(state, windowId){
      state.curId = windowId
    },
    setWindowName(state, {id, name}){
      state.windows[id].name = name
    },
    setWindowWidth(state, {id, width}){
      if(width > 50000){
        state.windows[id].width = 5000
      }else{
        state.windows[id].width = parseInt(width)
      }
    },
    setWindowHeight(state, {id, height}){
      if(height > 50000){
        state.windows[id].height = 5000
      }else{
        state.windows[id].height = parseInt(height)
      }
    },
    setWindowQuantity(state, {id, quantity}){
      state.windows[id].quantity = parseInt(quantity)
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
