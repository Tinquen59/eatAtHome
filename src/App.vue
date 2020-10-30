<template>
  <div id="app">
    <div id="nav">
      <Navbar />

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>

    <pied-de-page />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PiedDePage from './components/PiedDePage.vue'

export default {
  components: {
    Navbar,
    PiedDePage
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  // overflow: hidden;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}

ul {
  list-style-type: none;
}

// #nav {
//   // padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
