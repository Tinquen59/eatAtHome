<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <div class="menu">
      <button class="btnMenu">
        Boisson
      </button>

      <button class="btnMenu">
        Menu
      </button>

      <button class="btnMenu">
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
  // justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btnMenu {
  width: 250px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: none;
  background-color: $color-bgc;
  font-size: 2rem;

  &:hover {
    background-color: #fd7854;
    color: #fff;
    transition-duration: 0.5s;
  }
}

Carousel {
  margin-top: 150px;
}
</style>