import { createStore } from "vuex";
import defaultWindow from "@/helpers/default-window";
import { uuid } from "@/helpers/uuid";
import { saveState } from "@/helpers/save-state";

const windows = JSON.parse(localStorage.getItem("windows")) || defaultWindow;

export default createStore({
  plugins: [saveState],
  state: {
    windows: windows,
    indexWindow: 0,
  },
  getters: {},
  mutations: {
    ADD_WINDOW(state) {
      state.windows.push({
        name: `Окно ${state.windows.length + 1}`,
        id: uuid(),
      });
    },
    DEL_WINDOW(state, { id }) {
      state.windows = state.windows.filter((window) => window.id !== id);
    },
  },
  actions: {},
  modules: {},
});
