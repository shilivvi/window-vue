import { createApp } from 'vue'
import App from '@/vue/App.vue'
import router from '@/vue/router/router'
import store from '@/vue/store/store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')

