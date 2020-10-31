<template>
    <div class="drinks-card">
        <div>
            <img class="drinks-card__image" :src="image.src" :alt="image.alt">
        </div>

        <p class="drinks-card__name">{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: 'CardMenuItem',
    props: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.drinks-card {
    border: 1px solid #000;
    margin-right: 15px;
    &__image {
        width: 120px;
    }
    &__name {
        text-align: center;
    }
}
</style>