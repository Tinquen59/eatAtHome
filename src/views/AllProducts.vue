<template>
    <div>
        <!-- <router-link :to="{ name: 'Home' }">
            <i class="far fa-hand-point-left"></i>
        </router-link> -->

        <container-card-item>
            <card-item
                v-for="item in menus"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :typeOfItem="item.type"
                :key="item.name"
            />
        </container-card-item>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ContainerCardItem from '../components/ContainerCardItem.vue'
import CardItem from '../components/CardItem.vue'

export default {
    name: 'AllProducts',
    components: {
        ContainerCardItem,
        CardItem
    },
    computed: {
        ...mapState([ 'menus' ])
    }
}
</script>