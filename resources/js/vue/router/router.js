import AdminLayout from '@/vue/layouts/AdminLayout';
import AdminLogin from  '@/vue/pages/AdminLogin';
import AdminDashboard from  '@/vue/pages/AdminDashboard';
import {createRouter, createWebHistory} from "vue-router";
import store from '@/vue/store/store';

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: AdminDashboard,
        beforeEnter: (to, from, next) => {
          console.log(store.getters.getToken)
          if(store.getters.getToken){
            next()
          }else{
            next({name: 'login'})
          }
        }
      },
      {
        path: 'login',
        name: 'login',
        component: AdminLogin,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
