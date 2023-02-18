import VueRouter, { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//Import layouts
const MainLayout = () => import('../views/layouts/MainLayout.vue') 

//import pages
const LoginPage = () => import('../views/login/Login.vue') 
const DashboardPage = () => import('../views/dashboard/Dashboard.vue')
const ProjectPage = () => import('../views/pages/project/Project.vue')

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    hidden: true,
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
        component: ProjectPage,
        meta: {
          requiresAuth: true,
          title: 'Dashboard'
        }
      },
      {
        path: 'language',
        name: 'language',
        component: DashboardPage,
        meta: {
          requiresAuth: true,
          title: 'Dashboard'
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
