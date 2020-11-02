<template>
    <div>
        <router-link :to="{ name: 'Home' }">
            <i class="far fa-hand-point-left"></i>
        </router-link>

        <container-card-item>
            <card-item
                v-for="item in menus"
                v-show="item.type === 'menu'"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :composition="item.composition"
                @choose-menu="openModal"
                :key="item.id"
            />
        </container-card-item>

        <modal-food 
            v-if="displayModal" 
            :closeModal="closeModal"
            :nameMenu="nameMenu" 
            :priceMenu="priceMenu"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ContainerCardItem from '../components/ContainerCardItem.vue'
import CardItem from '../components/CardItem.vue'
import ModalFood from '../components/ModalFood.vue'

export default {
    name: 'Menu',
    components: {
        ContainerCardItem,
        CardItem,
        ModalFood
    },
    data() {
        return {
            displayModal: false,
            nameMenu: '',
            priceMenu: null
        }
    },
    computed: {
        ...mapState(['menus'])
    },
    methods: {
        openModal(paylod) {
            console.log("modal is open")
            this.displayModal = true
            this.nameMenu = paylod.name,
            this.priceMenu = paylod.price
        },
        closeModal() {
            this.displayModal = false
        }
    }
}
</script>