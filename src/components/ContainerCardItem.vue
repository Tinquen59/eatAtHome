<template>
    <div class="container__card-item">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.container__card-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
}
</style>