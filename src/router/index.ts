import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Registration from '../views/Registration.vue'
import Enter from '../views/Enter.vue'
import E404 from '../views/E404.vue'
import Main from '../views/Main.vue'
import enterStore from '../store/enter'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Enter' },
  },
  {
    path: '/enter',
    name: 'Enter',
    component: Enter,
  },
  {
    path: `/main/${localStorage.id}`,
    name: 'Main',
    component: Main,
  },
  {
    path: '/:pathMatch(.*)*',
    component: E404,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     next({
//       path: `/main/${enterStore.state.id}`,
//     })
//   }
// })
export default router
