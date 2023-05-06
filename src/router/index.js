import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'

import WelcomeView from '../views/WelcomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'
// auth guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser

  if (user) {
    next()
  } else {
    next({ name: 'WelcomeView' })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelcomeView',
      component: WelcomeView
    },
    {
      path: '/chatroom',
      name: 'ChatroomView',
      component: ChatroomView,
      beforeEnter: requireAuth
    }
  ]
})

export default router
