import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [
      {
        name: 'coca-cola',
        image: {
          src: '/images/boissons/coca-cola.png',
          alt: 'une bouteille de coca-cola'
        },
        type: 'boisson',
        price: 1.50,
        composition: ''
      },
      {
        name: 'fanta-orange',
        image: {
          src: '/images/boissons/fanta-orange.png',
          alt: 'une bouteille de fanta orange'
        },
        type: 'boisson',
        price: 1.50,
        composition: ''
      },
      {
        name: 'fanta-citron',
        image: {
          src: '/images/boissons/fanta-citron.png',
          alt: 'une bouteille de fanta citron'
        },
        type: 'boisson',
        price: 1.50,
        composition: ''
      },
      {
        name: 'ice-tea',
        image: {
          src: '/images/boissons/ice-tea.png',
          alt: 'une bouteille d\'evian'
        },
        type: 'boisson',
        price: 1.50,
        composition: ''
      },
      {
        name: 'orangina',
        image: {
          src: '/images/boissons/orangina.png',
          alt: 'une bouteille d\'evian'
        },
        type: 'boisson',
        price: 1.50,
        composition: ''
      },
      {
        name: 'sprite',
        image: {
          src: '/images/boissons/sprite.png',
          alt: 'une bouteille de sprite'
        },
        type: 'boisson',
        price: 1.50,
        composition: ''
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
