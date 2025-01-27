import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'Projects',
      component: () => import('@/components/projects.vue'),    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/theProject.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contactMe.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/posts.vue'),
    },
  ],
})

export default router
