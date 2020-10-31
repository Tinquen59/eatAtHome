<template>
    <div>
        <div class="heure_ouverture">
            <h3>Ouvert:</h3>
            <ul>
                <li>Du Lundi au Vendredi: 07:00 à 21:00</li>
                <li>Le Samedi: 09:00 à 23:00</li>
                <li>Le Dimanche: 11:00 à 22:00</li>
            </ul>
        </div>

        <footer>
            {{ copyright }}
        </footer>
    </div>
</template>

<script>
export default {
    name: 'PiedDePage',
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
.heure_ouverture {
  text-align: center;
  font-size: 1.3rem;
}

footer {
    background-color: #dfdddd;
    text-align: center;
    padding: 10px 0;
}
</style>