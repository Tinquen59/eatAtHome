<template>
    <div class="navbar">
        <div class="navbar__logo">
            <router-link :to="{ name: 'Home' }">
                <img src="/images/logo_site.png" alt="logo site">
            </router-link>
        </div>
        <p class="navbar__link">Nos produits</p>
        <div>Nos produits</div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss">
$color-bgc: #dfdddd;
// $color-bgc: #83b860;
// $color-secondary: #fff;
$color-secondary: #2c3e50;

.navbar {
    background-color: $color-bgc;
    color: $color-secondary;
    display: flex;

    &__logo img {
        width: 123px;
    }

    &__link {
        // margin-top: auto;
        // margin-bottom: auto;
        margin: auto 0 auto 35px;
    }
}
</style>