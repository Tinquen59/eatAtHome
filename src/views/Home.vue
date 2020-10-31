<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <div class="menu">
      <router-link :to="{ name: 'Boisson' }" class="menu__btn">
        Boisson
      </router-link>

      <button class="menu__btn">
        Menu
      </button>

      <button class="menu__btn">
        Dessert
      </button>
    </div>

    <Carousel />

    
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>

<style lang="scss">
$color-bgc: #dfdddd;

.menu {
  display: flex;
  margin-top: 200px;
  align-items: center;
  flex-direction: column;
  &__btn {
    width: 250px;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: none;
    background-color: $color-bgc;
    font-size: 2rem;
    color: #000;
    text-decoration: none;
    text-align: center;
    &:hover {
      background-color: #fd7854;
      color: #fff;
      transition-duration: 0.5s;
    }
  }
}

Carousel {
  margin-top: 150px;
}
</style>