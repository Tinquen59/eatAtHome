<template>
    <div class="modal">
        <div class="modal-container">
            <div class="modal-container__header">
                <h3>Menu: <span>{{ nameMenu }}</span></h3>
                <i class="fas fa-times" @click="closeModal"></i>
            </div>

            <hr>

            <div class="modal-container__content">
                
                <p class="modal-container__content--price">
                    {{ priceMenu }}€
                </p>
                
                <div class="modal-container__content__choose">
                    <div class="card-accompagnement"
                        v-for="accompagnement in menus" 
                        v-show="accompagnement.type === 'accompagnement'" 
                        :key="accompagnement.name"
                    >
                        <img :src="accompagnement.image.src" :alt="accompagnement.image.alt">
                        <p>+{{ accompagnement.price }}€</p>
                    </div>
                    <div class="card-accompagnement">
                        <img src="/images/menu/accompagnement/no-food.png" alt="pas de supplément">
                        <p>+0€</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ModalFood',
    props: {
        closeModal: {
            type: Function,
            required: true
        },
        nameMenu: {
            type: String,
            required: true
        },
        priceMenu: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState(['menus'])
    },
}
</script>

<style lang="scss">
$colorPrimary: #fd7854;
$colorSecondary: #fff;

.modal {
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    background-color: $colorSecondary;
    border-radius: 20px;
    width: 80%;
    padding: 10px;

    &__header {
        display: flex;
        justify-content: space-between;
        & span {
            text-transform: uppercase;
        }

        & .fa-times {
            margin-right: 5px;
            font-size: 2rem;
            color: $colorPrimary;
            cursor: pointer;
            margin: auto 6px auto 0;
            transition-duration: 0.5s;
            &:hover {
                rotate: 180deg;
            }
        }
    }

    &__content {

        &--price {
            background-color: #2c3e50;
            border-radius: 20px;
            width: 50px;
            color: $colorSecondary;
            text-align: center;
        }

        &__choose {
            display: flex;
            justify-content: space-around;
            text-align: center;
        }
    }
}

.card-accompagnement {
    padding: 5px 5px 0 5px;
    &:hover {
        background-color: $colorPrimary;
        border-radius: 20px;
    }

    & img {
        width: 130px;
        height: 130px;
        cursor: pointer;
    }
    & p {
        text-align: center;
    }
}
</style>