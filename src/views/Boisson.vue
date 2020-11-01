<template>
    <div class="">
        
        <router-link :to="{ name: 'Home' }">
            <i class="far fa-hand-point-left"></i>
        </router-link>
        
        <div class="drinks">
            <card-item
            v-for="item in menus"
            v-show="item.type === 'boisson'"
            :image="item.image"
            :name="item.name"
            :price="item.price"
            :key="item.id"
        />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CardItem from '../components/CardItem.vue'

export default {
    name: 'Boisson',
    components: {
        CardItem
    },
    computed: {
        ...mapState(['menus'])
    }
}
</script>

<style lang="scss">
.drinks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
}

.fa-hand-point-left {
    margin-top: 40px;
    margin-left: 40px;
    font-size: 2rem;
    color: #2c3e50;
    transition-duration: .5s;
    &:hover {
        color: #fd7854;
        rotate: 360deg;
    }
}
</style>