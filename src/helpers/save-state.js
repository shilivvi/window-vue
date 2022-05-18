export function saveState(store) {
  store.subscribe((mutatiosn, state) => {
    localStorage.setItem("windows", JSON.stringify(state.windows));
  });
}
