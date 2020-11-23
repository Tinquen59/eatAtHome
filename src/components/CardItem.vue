<template>
  <div class="item-card" @click="emitChooseMenu">
    <div>
      <img class="item-card__image" :src="image.src" :alt="image.alt" />
    </div>

    <p class="item-card__name">{{ name }}</p>

    <p>{{ price }}€</p>

    <div class="item-card__footer" v-if="composition.length">
      <hr />
      <p>{{ composition }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMenuItem",
  props: {
    image: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    composition: {
      type: String,
      default: "",
    },
    typeOfItem: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      moreIsActive: false,
    };
  },
  methods: {
    emitChooseMenu() {
      // si on est pas dans les menus on push dans le store sinon on ouvre la modal avec les infos
      // ajoute dans le panier
      if (this.$route.name !== "Menu") {
        this.$store.dispatch("addItemInCart", {
          image: this.image,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
        });
      } else {
        this.$emit("choose-menu", {
          image: this.image,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
        });
      }
    }
  },
};
</script>

<style lang="scss">
$color-primary: #fd7854;

.item-card {
  border: 3px solid #fd7854;
  border-radius: 20px;
  cursor: pointer;
  margin: 40px 0 40px 25px;
  text-align: center;
  width: 450px;
  padding-top: 10px;
  &__image {
    width: 120px;
  }
  &__name {
    font-weight: bold;
    text-transform: uppercase;
  }
  &__footer {
    display: none;
    color: #fff;
  }

  &:hover {
    background-color: #fd7854;
    & .item-card__footer {
      display: block;
    }
  }
}
</style>
