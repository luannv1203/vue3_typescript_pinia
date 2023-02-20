import VueRouter, { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//Import layouts
const MainLayout = () => import('../views/layouts/MainLayout.vue') 

//import pages
const LoginPage = () => import('../views/login/Login.vue') 
const DashboardPage = () => import('../views/dashboard/Dashboard.vue')
const ProjectPage = () => import('../views/pages/project/Project.vue')
const LanguagePage = () => import('../views/pages/language/Language.vue')

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
    redirect: { name: 'Dashboard' },
    meta: {
      requiresAuth: true,
      title: 'Homepage'
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: DashboardPage,
        meta: {
          requiresAuth: true,
          title: 'Dashboard'
        }
      },
      {
        path: 'project',
        name: 'Project',
        component: ProjectPage,
        meta: {
          requiresAuth: true,
          title: 'Project'
        }
      },
      {
        path: 'language',
        name: 'language',
        component: LanguagePage,
        meta: {
          requiresAuth: true,
          title: 'Language'
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
