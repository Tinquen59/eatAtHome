<template>
  <div>
    <div class="menu">
      <router-link :to="{ name: 'Boisson' }" class="menu__btn">
        Boisson
      </router-link>

      <router-link :to="{ name: 'Menu' }" class="menu__btn">
        Menu
      </router-link>

      <router-link :to="{ name: 'Dessert' }" class="menu__btn">
        Dessert
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home'
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
    transition-duration: 0.5s;
    &:hover {
      background-color: #fd7854;
      color: #fff;
    }
  }
}

Carousel {
  margin-top: 150px;
}
</style>