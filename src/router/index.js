import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import postsVue from '@/views/posts.vue'
import theProjectVue from '@/views/theProject.vue'
import contactMeVue from '@/views/contactMe.vue'
import aboutVue from '@/views/AboutView.vue'
import projectsVue from '@/components/projects.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'Projects',
      component: projectsVue,

    },
    {
      path: '/about',
      name: 'about',
      component: aboutVue,
    },
    {
      path: '/project',
      name: 'project',
      component:theProjectVue,
    },
    {
      path: '/contact',
      name: 'contact',
      component:contactMeVue,
    },
    {
      path: '/posts',
      name: 'posts',
      component: postsVue,
    },
  ],
})

export default router
