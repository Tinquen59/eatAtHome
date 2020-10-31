<template>
    <div>
        <Carousel />

        <hr>

        <div class="infos">
            <div class="infos__heure-ouverture">
                <h3>Ouvert:</h3>
                <ul>
                    <li>Du Lundi au Vendredi: 07:00 à 21:00</li>
                    <li>Le Samedi: 09:00 à 23:00</li>
                    <li>Le Dimanche: 11:00 à 22:00</li>
                </ul>
            </div>

            <!-- <div class="infos__separateur"></div> -->

            <div class="infos__nous-rejoindre">
                <h3>Nous rejoindre:</h3>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter-square"></i>
            </div>
        </div>

        <footer>
            {{ copyright }}
        </footer>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
    name: 'PiedDePage',
    components: {
        Carousel
    },
    data() {
        return {

        }
    },
    computed: {
        copyright() {
            const currentYear = new Date().getFullYear()
            return `Copyright ${currentYear}`
        }
    }
}
</script>

<style lang="scss">
hr {
    margin: 60px 60px;
}
.infos {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.3rem;
    &__heure-ouverture {
        text-align: center;
        & ul {
            padding: 0;
        }
    }
    &__nous-rejoindre {
        text-align: center;
        & .fab {
            font-size: 2rem;
            cursor: pointer;
            margin-right: 15px;
        }
    }
}

.fa-instagram-square {
    color: transparent;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-clip: text;
    -webkit-background-clip: text;
}

.fa-facebook {
    color: #4267B2;
}

.fa-twitter-square {
    color: #1da1f2;
}

footer {
    background-color: #dfdddd;
    text-align: center;
    margin-top: 20px;
    padding: 20px 0;
}
</style>