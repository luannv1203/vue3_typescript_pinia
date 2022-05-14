import VueRouter, { createRouter, createWebHistory } from 'vue-router'

//Import layouts
import MainLayout from '../views/layouts/MainLayout.vue'

//import pages
import LoginPage from '../views/login/Login.vue'
import DashboardPage from '../views/dashboard/Dashboard.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: MainLayout,
    redirect: { name: 'dashboard' },
    meta: {
      requiresAuth: true,
      title: 'Homepage'
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardPage,
        meta: {
          requiresAuth: true,
          title: 'Dashboard'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
