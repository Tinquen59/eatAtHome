<template>
    <div class="">
        
        <router-link :to="{ name: 'Home' }">
            <i class="far fa-hand-point-left"></i>
        </router-link>

        <container-card-item>
            <card-item
                v-for="item in menus"
                v-show="item.type === 'boisson'"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :typeOfItem="item.type"
                :key="item.id"
            />
        </container-card-item>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ContainerCardItem from '../components/ContainerCardItem.vue'
import CardItem from '../components/CardItem.vue'

export default {
    name: 'Boisson',
    components: {
        CardItem,
        ContainerCardItem
    },
    computed: {
        ...mapState(['menus'])
    }
}
</script>

<style lang="scss">
$deg-rotation: 360deg;
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
        transform:rotate($deg-rotation);
        -ms-transform:rotate($deg-rotation); /* IE 9 */
        -moz-transform:rotate($deg-rotation); /* Firefox */
        -webkit-transform:rotate($deg-rotation); /* Safari and Chrome */
        -o-transform:rotate($deg-rotation); /* Opera */
    }
}
</style>