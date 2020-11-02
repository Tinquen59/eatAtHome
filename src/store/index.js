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
      {
        name: 'ribs BBC',
        image: {
          src: '/images/menu/barbecue-ribs.png',
          alt: 'un morceau de ribs au BBC'
        },
        type: 'menu',
        price: 7.5,
        composition: ''
      },
      {
        name: 'bucket Poulet',
        image: {
          src: '/images/menu/bucket-of-chicken.png',
          alt: 'un bucket de poulet'
        },
        type: 'menu',
        price: 9.5,
        composition: ''
      },
      {
        name: 'hamburger',
        image: {
          src: '/images/menu/hamburger.png',
          alt: 'un hamburger'
        },
        type: 'menu',
        price: 6,
        composition: ''
      },
      {
        name: 'hot dog',
        image: {
          src: '/images/menu/hot-dog.png',
          alt: 'un hot dog'
        },
        type: 'menu',
        price: 5,
        composition: ''
      },
      {
        name: 'mega tacos',
        image: {
          src: '/images/menu/megaTacos.png',
          alt: 'un mega tacos'
        },
        type: 'menu',
        price: 9,
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
