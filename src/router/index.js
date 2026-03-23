// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogArticleView from '../views/BlogArticleView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-article',
      component: BlogArticleView,
    },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router