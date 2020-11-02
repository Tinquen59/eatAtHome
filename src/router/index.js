import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boisson from '../views/Boisson.vue'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'nosProduits/boisson',
    name: 'Boisson',
    component: Boisson
  },
  {
    path: 'nosProduits/menu',
    name: 'Menu',
    component: Menu
  }
]

const router = new VueRouter({
  routes
})

export default router
