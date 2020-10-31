import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boisson from '../views/Boisson.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/boisson',
    name: 'Boisson',
    component: Boisson
  }
]

const router = new VueRouter({
  routes
})

export default router
