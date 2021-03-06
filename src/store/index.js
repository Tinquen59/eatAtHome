import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [
      {
        name: "coca-cola",
        image: {
          src: "/images/boissons/coca-cola.png",
          alt: "une bouteille de coca-cola",
        },
        type: "boisson",
        price: 1.5,
        composition: "",
      },
      {
        name: "fanta-orange",
        image: {
          src: "/images/boissons/fanta-orange.png",
          alt: "une bouteille de fanta orange",
        },
        type: "boisson",
        price: 1.5,
        composition: "",
      },
      {
        name: "fanta-citron",
        image: {
          src: "/images/boissons/fanta-citron.png",
          alt: "une bouteille de fanta citron",
        },
        type: "boisson",
        price: 1.5,
        composition: "",
      },
      {
        name: "ice-tea",
        image: {
          src: "/images/boissons/ice-tea.png",
          alt: "une bouteille d'evian",
        },
        type: "boisson",
        price: 1.5,
        composition: "",
      },
      {
        name: "orangina",
        image: {
          src: "/images/boissons/orangina.png",
          alt: "une bouteille d'evian",
        },
        type: "boisson",
        price: 1.5,
        composition: "",
      },
      {
        name: "sprite",
        image: {
          src: "/images/boissons/sprite.png",
          alt: "une bouteille de sprite",
        },
        type: "boisson",
        price: 1.5,
        composition: "",
      },
      {
        name: "ribs BBC",
        image: {
          src: "/images/menu/barbecue-ribs.png",
          alt: "un morceau de ribs au BBC",
        },
        type: "menu",
        price: 7.5,
        composition: "travers de porc / sauce BBC",
      },
      {
        name: "bucket Poulet",
        image: {
          src: "/images/menu/bucket-of-chicken.png",
          alt: "un bucket de poulet",
        },
        type: "menu",
        price: 9.5,
        composition: "Sceau de poulet",
      },
      {
        name: "hamburger",
        image: {
          src: "/images/menu/hamburger.png",
          alt: "un hamburger",
        },
        type: "menu",
        price: 6,
        composition:
          "Pain burger / cheddar / steak pur boeuf / salade / tomate /oignon",
      },
      {
        name: "hot dog",
        image: {
          src: "/images/menu/hot-dog.png",
          alt: "un hot dog",
        },
        type: "menu",
        price: 5,
        composition:
          "Pain blanc / saucisse / ketchup / mayonnaise / cornichon /oignon",
      },
      {
        name: "mega tacos",
        image: {
          src: "/images/menu/megaTacos.png",
          alt: "un mega tacos",
        },
        type: "menu",
        price: 9,
        composition:
          "Tortillas / tabasco / poivron / tomate / oignon / poulet / boeuf haché",
      },
      {
        name: "frites",
        image: {
          src: "/images/menu/accompagnement/frites.png",
          alt: "des frites",
        },
        type: "accompagnement",
        price: 2.5,
        composition: "",
      },
      {
        name: "salade",
        image: {
          src: "/images/menu/accompagnement/salade.png",
          alt: "une salade",
        },
        type: "accompagnement",
        price: 2.5,
        composition: "",
      },
      {
        name: "dessert mystérieux",
        image: {
          src: "/images/desserts/dessert1.png",
          alt: "un dessert1",
        },
        type: "dessert",
        price: 3,
        composition: "",
      },
      {
        name: "glace",
        image: {
          src: "/images/desserts/dessert2.png",
          alt: "une glace",
        },
        type: "dessert",
        price: 4.5,
        composition: "",
      },
    ],
    shoppingCart: 0,
    shoppingCartItems: []
  },
  mutations: {
    INCREASE_QUANTITY(state, element) {
      for (const item of state.shoppingCartItems) {
        if (item.name === element.name) item.quantity += 1
      }
    },
    DECREASE_QUANTITY(state, { element, index }) {
      let noQuantity = false
      for (const item of state.shoppingCartItems) {
        if (item.name === element.name && item.quantity > 0) item.quantity -= 1
        
        if (item.name === element.name && item.quantity === 0) noQuantity = true
      }

      if (noQuantity === true) state.shoppingCartItems.splice(index, 1);
    },
    PUSH_ITEM_CART(state, object) {
      state.shoppingCartItems.push(object);
    },
    DELETE_ELEMENT_CART(state, index) {
      state.shoppingCartItems.splice(index, 1);
    },
  },
  actions: {
    addItemInCart({ commit, state }, object) {
      if (state.shoppingCartItems.length > 0) {
        for (const [i, v] of state.shoppingCartItems.entries()) {
          if (v.name === object.name) {
            v.quantity += object.quantity;
            break;
          } else if (
            i === state.shoppingCartItems.length - 1 &&
            v.name !== object.name
          ) {
            commit("PUSH_ITEM_CART", object);
            break;
          }
        }
      } else {
        commit("PUSH_ITEM_CART", object);
      }
    },
    deleteElementInCart({ commit }, index) {
      commit("DELETE_ELEMENT_CART", index);
    },
    incrementQuantity({ commit }, element) {
      commit("INCREASE_QUANTITY", element)
    },
    decrementQuantity({ commit }, { element, index }) {
      commit("DECREASE_QUANTITY", { element, index })
    }
  },
  modules: {},
});
