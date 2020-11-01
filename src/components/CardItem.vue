<template>
    <div class="item-card">
        <div>
            <img class="item-card__image" :src="image.src" :alt="image.alt">
        </div>

        <p class="item-card__name">{{ name }}</p>

        <p>{{ price }}€</p>
    </div>
</template>

<script>
export default {
    name: 'CardMenuItem',
    props: {
        image: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss">
$color-primary: #fd7854;

.item-card {
    border: 3px solid #fd7854;
    border-radius: 20px;
    cursor: pointer;
    margin: 40px 0 40px 25px;
    text-align: center;
    width: 450px;
    padding-top: 10px;
    &:hover {
        background-color: #fd7854;
    }
    &__image {
        width: 120px;
    }
    &__name {
        font-weight: bold;
        text-transform: uppercase;
    }
}
</style>