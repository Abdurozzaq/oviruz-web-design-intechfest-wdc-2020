import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import LandingLayout from '../views/layouts/LandingLayout.vue'
import MainLayout from '../views/layouts/MainLayout.vue'

// Pages
import LandingPage from '../views/pages/LandingPage.vue'
import StatisticPage from '../views/pages/StatisticPage.vue'

Vue.use(VueRouter)

const pageTitle = (to, from, next) => {
  document.title = to.meta.title
  next()
}

const routes = [
  {
    path: "",
    component: LandingLayout,
    children: [
      {
          path: "",
          meta: {
              title: 'Selamat Datang di Oviruz',
          },
          component: LandingPage,
          beforeEnter: pageTitle
      },
    ]
  },
  {
    path: "/pages",
    component: MainLayout,
    children: [
      {
          path: "statistic",
          meta: {
              title: 'Statistik Covid-19 di Indonesia',
          },
          component: StatisticPage,
          beforeEnter: pageTitle
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
