<template>
  <div class="panier">
    <h3 class="panier--title">Mon panier</h3>

    <div
      class="panier-contents"
      v-for="shoppingCartItem in shoppingCartItems"
      :key="shoppingCartItem.id"
    >
      <div class="panier-contents__item">
        <img
          :src="shoppingCartItem.image.src"
          :alt="shoppingCartItem.image.alt"
        />

        <div class="item">
          <div div class="item__info">
            <p v-if="shoppingCartItem.imageAccompagnement">
              {{ shoppingCartItem.name }} / {{shoppingCartItem.imageAccompagnement.alt }}
            </p>
            <p v-else>
              {{ shoppingCartItem.name }}
            </p>
            <p>{{ shoppingCartItem.price }}€</p>
            <p>{{ shoppingCartItems.id }}</p>
          </div>
          <div class="item__quantity">
            <input
              type="number"
              name="quantity"
              min="0"
              max="200"
              v-model="shoppingCartItem.quantity"
            />
            <p>{{ shoppingCartItem.quantity * shoppingCartItem.price }}€</p>
          </div>
          <div class="item__delete">
            <i class="far fa-trash-alt" @click="deleteFromCart(shoppingCartItem)"></i>
          </div>
        </div>
      </div>

      <hr class="panier-contents__item--separator" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      test: 3,
    };
  },
  computed: {
    ...mapState(["shoppingCartItems"])
    
  },
  methods: {
    deleteFromCart(element) {
      this.$store.dispatch('deleteElementInCart', this.getIndex(element))      
    },
    getIndex(element) {
      for (const [key, value] of this.shoppingCartItems.entries()) {
        if (element.name === value.name) return key
      }
    }
  },
  mounted() {
    console.log('l\'élément est bien monté :)')
    
    for (const shoppingCartItem of this.shoppingCartItems) {
      if (shoppingCartItem === '') {
        console.log('tet')
      }
      console.log( this.shoppingCartItems.filter(item => shoppingCartItem.name === item.name).map(item => item) )
    }
  }
};
</script>

<style lang="scss">
.panier {

  &--title {
    text-align: center;
  }

  &-contents {
    width: 80%;
    margin: 40px auto;

    &__item {
      padding: 20px;
      width: 100%;
      display: flex;
      &:hover {
        border: 2px solid #fd7854;
        border-radius: 20px;
      }

      & img {
        width: 150px;
      }
      &--separator {
        padding: 0 20px;
        width: 100%;

        &:last-child {
          display: none;
        }
      }
    }
  }
}

.item {
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__info {
    margin-left: 30px;
  }
  &__quantity {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 130px;
    & input {
      width: 40px;
      height: 15px;
      margin: 16px;
    }
  }
  &__delete {
    & i {
      margin-top: 16px;
      font-size: 1.3rem;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
