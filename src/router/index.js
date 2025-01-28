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
      meta: { transition: 'slide-fade' }, // Home sayfası için animasyon


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
      meta: { transition: 'fade' }, // Contact sayfası için animasyon

    },
    {
      path: '/contact',
      name: 'contact',
      component:contactMeVue,
      meta: { transition: 'slide-fade'},

    },
    {
      path: '/posts',
      name: 'posts',
      component: postsVue,
      meta: { transition: 'slide-fade' }, // Posts sayfası için animasyon

    },
  ],
})

export default router
