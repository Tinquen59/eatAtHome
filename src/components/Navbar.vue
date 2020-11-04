<template>
    <!-- <div class="navbar">
        <div class="navbar__logo">
            <router-link :to="{ name: 'Home' }">
                <img src="/images/logo_site.png" alt="logo site">
            </router-link>
        </div>
        <p class="navbar__link">Nos produits</p>
    </div> -->

    <header>
        <!-- <div class="navbar__logo">
            <router-link :to="{ name: 'Home' }">
                <img src="/images/logo_site.png" alt="logo site">
            </router-link>
        </div> -->

        <!-- <div class="dropdown">
            <p class="dropdown--title">Nos produits <span><i class="fas fa-caret-down"></i></span></p>
            <div class="dropdown__fields">
                <p>Boisson</p>
                <p>Menu</p>
                <p>Dessert</p>
            </div>
        </div> -->
        <nav class="navbar">
            <ul class="navbar__menu">
                <li>
                    <router-link :to="{ name: 'Home' }">
                        <img src="/images/logo_site.png" alt="logo site" />
                    </router-link>
                </li>
                <li class="dropdown">Nos Produits
                    <ul class="dropdown__menu">
                        <li class="dropdown__menu--item">
                            <router-link class="dropdown--link" :to="{ name: 'AllProducts' }">Tous nos produits</router-link>
                        </li>
                        <li class="dropdown__menu--item">
                            <router-link class="dropdown--link" :to="{ name: 'Menu' }">Menu</router-link>
                        </li>
                        <li class="dropdown__menu--item">
                            <router-link class="dropdown--link" :to="{ name: 'Boisson' }">Boisson</router-link>
                        </li>
                        <li class="dropdown__menu--item">
                            <router-link class="dropdown--link" :to="{ name: 'Dessert' }">Dessert</router-link>
                        </li>
                    </ul>
                </li>
                <li>contact</li>
            </ul>
        </nav>
    </header>
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

header .navbar {
    // color: $color-secondary;
    width: 100%;
    background-color: $color-bgc;
    height: 70px;

    &__menu {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    & ul {
        margin: 0;
        padding: 0;

        & li {
            // margin: 0;
            padding-top: 10px;
            // margin-top: 10px;
            width: 200px;
            height: 40px;
            text-align: center;
            background-color: $color-bgc;
            line-height: 40px;
            &:first-child {
                padding-top: 0;
                margin-top: 0;
            }

            & img {
                height: 70px;
            }
        }
    }
}

.dropdown {
    &__menu {
        display: none;
        position: relative;
    }
    &--link {
        text-decoration: none;
        color: $color-secondary;
    }

    &:hover {
        & .dropdown__menu {
            display: block;
        }
        & .dropdown--link:hover {
            color: #fd7854;
        }
    }
}
</style>