import { createStore } from "vuex";
import defaultWindow from "@/helpers/default-window";
import { uuid } from "@/helpers/uuid";

export default createStore({
  state: {
    windows: defaultWindow,
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
