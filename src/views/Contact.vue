<template>
  <div class="container">
    <form class="form">
      <div class="form__field">
        <input class="form__field--input" 
          type="text" 
          placeholder="Nom*" 
          v-model="nom"
        />
        <input class="form__field--input" 
          type="text" 
          placeholder="Prenom*" 
          v-model="prenom"
        />
      </div>

      <div class="submit__form">
        <button type="submit" class="submit--btn">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      nom: '',
      prenom: ''
    }
  }
}
</script>

<style lang="scss">
$color-bgc: #dfdddd;
// $color-bgc: #83b860;
$color-secondary: #2c3e50;

::-webkit-input-placeholder {
   font-style: italic;
}
:-moz-placeholder {
   font-style: italic;  
}
::-moz-placeholder {
   font-style: italic;  
}
:-ms-input-placeholder {  
   font-style: italic; 
}

.container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.form {
  padding: 20px;
  width: 70%;
  border: 3px solid #fd7854;
  border-radius: 20px;

  &__field {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;

    &--input {
      border: none;
      border-bottom: 2px solid $color-secondary;
      font-size: 1rem;
      transition-duration: 2s;
      transition-property: ease;
      &:focus {
        border-color: #fd7854;
      }
    }
  }
}

.submit {
  &__form {
    margin-top: 40px;
    text-align: center;
  }
}
</style>