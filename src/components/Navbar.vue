<template>
    <header>
        <nav class="navbar">
            <ul class="navbar__menu">
                <li>
                    <router-link :to="{ name: 'Home' }">
                        <img src="/images/logo_site.png" alt="logo site" />
                    </router-link>
                </li>
                <li class="dropdown">Nos Produits <i class="fas fa-caret-down"></i>
                    <ul class="dropdown__menu">
                        <li class="dropdown__menu--item">
                            <router-link class="nav--link" :to="{ name: 'AllProducts' }">
                                Tous nos produits
                                </router-link>
                        </li>
                        <li class="dropdown__menu--item">
                            <router-link class="nav--link" :to="{ name: 'Menu' }">
                                Menu
                            </router-link>
                        </li>
                        <li class="dropdown__menu--item">
                            <router-link class="nav--link" :to="{ name: 'Boisson' }">
                                Boisson
                            </router-link>
                        </li>
                        <li class="dropdown__menu--item">
                            <router-link class="nav--link" :to="{ name: 'Dessert' }">
                                Dessert
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link class="nav--link" :to="{ name: 'Contact' }">
                        Contact
                    </router-link>
                </li>
            </ul>

            <div class="shopping">
                <router-link class="nav--link" :to="{ name: 'Panier' }">
                    <i class="fas fa-shopping-basket"></i>
                </router-link>
                <span class="shopping--counter">{{ shoppingCartItems.length }}</span>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapState(['shoppingCartItems'])
    }
}
</script>

<style lang="scss">
$color-bgc: #dfdddd;
// $color-bgc: #83b860;
// $color-secondary: #fff;
$color-secondary: #2c3e50;

@mixin flexRow {
    display: flex;
    flex-direction: row;
}

header .navbar {
    width: 100%;
    background-color: $color-bgc;
    height: 70px;
    @include flexRow;

    &__menu {
        @include flexRow;

         a {
            &.router-link-exact-active {
            color: #fd7854;
            }
        }
    }

    & ul {
        margin: 0;
        padding: 0;

        & li {
            padding-top: 10px;
            width: 150px;
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
        z-index: 1;
    }

    &:hover {
        & .dropdown__menu {
            display: block;
        }
        & .nav--link:hover {
            color: #fd7854;
        }
    }
}

.nav--link {
    text-decoration: none;
    color: $color-secondary;
}

.shopping {
    font-size: 2rem;
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;

    &--counter {
        font-size: 1.5rem;
        margin-left: 5px;
        margin-top: 7px;
    }
}
</style>