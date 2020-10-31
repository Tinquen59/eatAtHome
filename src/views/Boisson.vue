<template>
    <div class="drinks">
        <!-- <div>
            <p>{{ item.name }}</p>
            <img class="menu-item__image" :src="item.image.src" :alt="item.image.alt">
        </div> -->
        <card-menu-item
            v-for="item in menus"
            :image="item.image"
            :name="item.name"
            :key="item.id"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CardMenuItem from '../components/CardMenuItem.vue'

export default {
    name: 'Boisson',
    components: {
        CardMenuItem
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
}
</style>