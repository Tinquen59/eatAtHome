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
        name: 'evian',
        image: {
          src: '/images/boissons/evian.png',
          alt: 'une bouteille d\'evian'
        },
        type: 'boisson',
        price: 1,
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
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
