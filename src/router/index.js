import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import postsVue from '@/views/posts.vue'
import theProjectVue from '@/views/theProject.vue'
import contactMeVue from '@/views/contactMe.vue'
import aboutVue from '@/views/AboutView.vue'
import projectsVue from '@/components/projects.vue'
import aboutMyPortfolioVue from '@/views/posts/aboutMyPortfolio.vue'
import PostDetailVue from '@/views/postDetail.vue';
import Post1 from '@/views/posts/Post1.vue';
import Post2 from '@/views/posts/Post2.vue';
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
    {
      path: '/aboutMyPortfolio',
      name: 'aboutMyPortfolio',
      component: aboutMyPortfolioVue,
      meta: { transition: 'slide-fade' }, // Posts sayfası için animasyon

    },
    { path: '/post/:id', name: 'postDetail', component: PostDetailVue },
    { path: '/posts/1', name: 'post1', component: Post1 },
    { path: '/posts/2', name: 'post2', component: Post2 }

  ],
})

export default router
