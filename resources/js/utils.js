export function saveStatePlugin(store){
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        'windows',
        JSON.stringify(state.windows)
      )
      localStorage.setItem(
        'user',
        JSON.stringify(state.user)
      )
    }
  )
}
