<template>
  <div class="cart">
    <h3 class="cart--title">Mon panier</h3>

    <div class="cart__empty" v-if="shoppingCartItems.length === 0">
      <p>Vous avez 0 produit dans votre panier</p>
    </div>

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
              {{ shoppingCartItem.name }} /
              {{ shoppingCartItem.imageAccompagnement.alt }}
            </p>
            <p v-else>
              {{ shoppingCartItem.name }}
            </p>
            <p>{{ shoppingCartItem.price }}€</p>
            <p>{{ shoppingCartItems.id }}</p>
          </div>
          <div class="item__quantity">
            <div class="display__price">
              <p>
                {{ shoppingCartItem.quantity }}
              </p>
              <div class="change__price">
                <i
                  class="fas fa-angle-right increment--quantity"
                  @click="incrementQuantity(shoppingCartItem)"
                >
                </i>
                <i
                  class="fas fa-angle-right decrement--quantity"
                  @click="decrementQuantity(shoppingCartItem)"
                >
                </i>
              </div>
            </div>

            <p>
              {{
                priceQuantity(
                  shoppingCartItem.quantity,
                  shoppingCartItem.price
                )
              }}€
            </p>
          </div>
          <div class="item__delete">
            <i
              class="far fa-trash-alt"
              @click="deleteFromCart(shoppingCartItem)"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <div class="card-total" v-if="shoppingCartItems.length > 0">
      <div class="total">
        <div class="total__contents">
          <p class="total__contents--price">Produits : {{ priceProduct }}€</p>
          <p class="total__contents--delivery">
            Livraison : {{ priceDelivery }}€
          </p>
          <p class="total__contents--total">Total : {{ totalAmount }}€</p>
        </div>
        <div class="total__pay">
          <button class="big-button">
            Valider la commande <span class="fas fa-angle-right"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      priceProduct: 0, // prix de tous les produits
      priceDelivery: 5, // prix de la livraison
    };
  },
  computed: {
    ...mapState(["shoppingCartItems"]),

    // calcul le total (prix de tous les produits + les frais de livraison)
    totalAmount() {
      return this.priceProduct + this.priceDelivery;
    },
  },
  methods: {
    // supprimer un élément du panier
    deleteFromCart(element) {
      this.$store.dispatch("deleteElementInCart", this.getIndex(element));

      this.getPriceProduct();
    },
    incrementQuantity(element) {
      this.$store.dispatch("incrementQuantity", element);
      
      this.getPriceProduct();
    },
    decrementQuantity(element) {
      const index = this.getIndex(element)

      this.$store.dispatch("decrementQuantity", {
          element,
          index
        });

      this.getPriceProduct();
    },
    // calcul le prix en fonction de la quantité
    priceQuantity(quantity, price) {
      return quantity * price;
    },
    // récupère l'index de l'élément cliqué
    getIndex(element) {
      for (const [key, value] of this.shoppingCartItems.entries()) {
        if (element.name === value.name) return key;
      }
    },
    // récupère le prix de tous les produits
    getPriceProduct() {
      this.priceProduct = 0;
      for (const cartItem of this.shoppingCartItems) {
        const priceQuantity = this.priceQuantity(
          cartItem.quantity,
          cartItem.price
        );

        this.priceProduct += priceQuantity;
      }
    }
  },
  mounted() {
    // récupère le prix de tous les produits quand l'élément est monté
    this.getPriceProduct();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

$color-primary: #fd7854;

@mixin cardCart {
  width: 80%;
  margin: 40px auto;
}

@mixin changeQuantity($rotation) {
  transform: rotate($rotation);
  -ms-transform: rotate($rotation); /* IE 9 */
  -moz-transform: rotate($rotation); /* Firefox */
  -webkit-transform: rotate($rotation); /* Safari and Chrome */
  -o-transform: rotate($rotation); /* Opera */
  cursor: pointer;
  color: grey;
}

.cart {
  &--title {
    text-align: center;
  }

  &__empty {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-primary;
  }
}

.panier {
  &-contents {
    @include cardCart;

    &__item {
      padding: 20px;
      width: 100%;
      display: flex;
      &:hover {
        border: 2px solid $color-primary;
        border-radius: 20px;
      }

      & img {
        width: 150px;
      }

      & .display__price {
        display: flex;
        margin-right: 5px;

        & p {
          color: grey;
        }

        & .change__price {
          display: flex;
          flex-direction: column;
          padding: 10px;

          & .increment--quantity {
            @include changeQuantity(-90deg);
          }
          & .decrement--quantity {
            @include changeQuantity(90deg);
          }
        }
      }
    }
  }
}

.card-total {
  @include cardCart;

  & .total {
    border: 2px solid #2c3e50;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    width: 100%;

    &__contents {
      &--price {
        color: grey;
        font-style: italic;
        font-size: 0.9rem;
      }
      &--delivery {
        color: grey;
        font-style: italic;
        font-size: 0.9rem;
      }
      &--total {
        color: $color-primary;
        font-weight: bold;
        font-size: 1.4rem;
      }
    }

    &__pay {
      display: flex;
      align-items: center;

      & button {
        cursor: pointer;
        outline: none;
        border: 2px solid $color-primary;
        border-radius: 10px;
        font-size: 1.2rem;
        color: $color-primary;
        font-weight: 700;
        text-transform: uppercase;
        font-family: cursive;
        background-color: #fff;
        padding: 15px 5px;

        & .fa-angle-right {
          display: none;
        }

        &:hover,
        &:hover > .fa-angle-right {
          background-color: $color-primary;
          color: #fff;
          display: inline-block;
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
