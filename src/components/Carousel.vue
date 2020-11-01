<template>
    <div class="carousel">
        <div class="carousel__image">
            <div class="icon">
                <i class="fas fa-chevron-left" @click="previousPicture"></i>
            </div>

            <img :src="require(`../../public/images/carousel/${ imageDisplay }.jpg`)" alt="chef cuisto">

            <div class="icon icon--right">
                <i class="fas fa-chevron-right" @click="nexPicture"></i>
            </div>

            <ul class="carousel__shortcut">
                <li class="carousel__shortcut_liste"
                    v-for="n in images.length"
                    :class="{'carousel__shortcut_liste--active': counter === n - 1}"
                    @click="goto(n-1)"
                    :key="n"
                >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            images: [ 'exterieur', 'chef-cuisto', 'interieur'],
            imageDisplay: '',
            counter: 0
        }
    },
    methods: {
        previousPicture() {
            if ( this.counter > 0 ) this.imageDisplay = this.images[this.counter -= 1]
            else this.imageDisplay = this.images[ this.counter = this.images.length - 1 ]
        },
        nexPicture() {
            if ( this.counter < this.images.length - 1 ) this.imageDisplay = this.images[this.counter += 1]
            else this.imageDisplay = this.images[ this.counter = 0 ]
        },
        goto(index) {
            this.imageDisplay = this.images[ this.counter = index ]
        }
    },
    beforeMount() {
        if ( this.imageDisplay === '' ) this.imageDisplay = this.images[0]
    },
    mounted() {
        setInterval(() => {
            if ( this.counter < this.images.length - 1 ) this.imageDisplay = this.images[this.counter += 1]
            else this.imageDisplay = this.images[ this.counter = 0 ]
        }, 5000)
    }
}
</script>

<style lang="scss">
$height-pictures: 500px;

@mixin iconPostion($divider, $marginLeft: 0, $marginRight: 0) {
    position: relative;
    top: $height-pictures / $divider;
    margin-left: $marginLeft;
    margin-right: $marginRight;
    cursor: pointer;
}

.carousel {
    margin-top: 100px;
    &__image {
        display: flex;
        flex-direction: row;
        & img {
            width: 100%;
            height: $height-pictures;
        }
    }
    &__shortcut {
        position: absolute;
        list-style: none;
        width: 100%;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        &_liste {
            position: relative;
            top: $height-pictures / 1.15;
            background-color: #fff;
            width: 10px;
            height: 10px;
            border: 1px solid #000;
            border-radius: 50%;
            margin-right: 5px;
            &:last-child {
                margin-right: 0;
            }
            &--active {
            background-color: #000;
        }
        }
    }
}

.icon {
    position: absolute;
    color: #fff;
    font-size: 2rem;
    &--right {
        right: 0;
    }

    & .fa-chevron {
        &-left {
            @include iconPostion(2, 10px);
        }
        &-right {
            @include iconPostion(2, 20, 10px);
        }
    }
}
</style>