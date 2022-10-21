export function saveStatePlugin(store){
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        'windows',
        JSON.stringify(state.windows)
      )
      localStorage.setItem(
        'token',
        state.token
      )
    }
  )
}
