import AdminLayout from '@/vue/layouts/AdminLayout';
import AdminLogin from  '@/vue/pages/AdminLogin';
import AdminDashboard from  '@/vue/pages/AdminDashboard';
import AppLayout from '@/vue/layouts/AppLayout';
import {createRouter, createWebHashHistory} from "vue-router";
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
  },
  {
    path: '/',
    component: AppLayout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
