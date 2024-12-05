import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/favorites',
      name: 'favorite',

      component: () => import('../views/FavoriteView.vue'),
      children: [
        {
          path: 'xotiralar',
          name: 'tabsXotiralar',
          component: () => import('../components/FavoriteTabs/Memories.vue')
        },
        {
          path: 'videos',
          name: 'tabsVideos',
          component: () => import('../components/FavoriteTabs/Videos.vue')
        },
        {
          path: 'pictures',
          name: 'tabsPicture',
          component: () => import('../components/FavoriteTabs/Photos.vue')
        },
        {
          path: 'poems',
          name: 'tabsPoems',
          component: () => import('../components/FavoriteTabs/Poems.vue')
        },
        {
          path: 'translations',
          name: 'tabsTranslations',
          component: () => import('../components/FavoriteTabs/Translations.vue')
        },
        {
          path: 'epics',
          name: 'tabsEpics',
          component: () => import('../components/FavoriteTabs/Epics.vue')
        },
        {
          path: 'books',
          name: 'tabsBooks',
          component: () => import('../components/FavoriteTabs/Books.vue')
        }
      ]
    },
    {
      path: '/memories',
      name: 'Memories',
      component: () => import('../views/MemoriesView.vue')
    },
    {
      path: '/translations',
      name: 'Translations',
      component: () => import('../views/Translations.vue')
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/Videos.vue')
    },
    {
      path: '/books',
      name: 'Books',
      component: () => import('../views/Books.vue')
    },
    {
      path: '/poems',
      name: 'Poems',
      component: () => import('../views/Poems.vue')
    },
    {
      path: '/epics',
      name: 'Epics',
      component: () => import('../views/Epics.vue')
    },
    {
      path: '/picture/:slug',
      name: 'Picture',
      component: () => import('../views/PictureView.vue')
    },
    {
      path: '/read-book',
      name: 'ReadBook',
      component: () => import('../views/ReadBook.vue')
    },
    {
      path: '/poem/:slug',
      name: 'Poem',
      component: () => import('../views/Poem.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router
