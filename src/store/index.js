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
        }
      },
      {
        name: 'evian',
        image: {
          src: '/images/boissons/evian.jpg',
          alt: 'une bouteille d\'evian'
        }
      },
      {
        name: 'ice-tea',
        image: {
          src: '/images/boissons/ice-tea.png',
          alt: 'une bouteille d\'evian'
        }
      },
      {
        name: 'orangina',
        image: {
          src: '/images/boissons/orangina.png',
          alt: 'une bouteille d\'evian'
        }
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
