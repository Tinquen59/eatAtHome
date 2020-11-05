<template>
  <div class="container">
    <div class="card__form">
      <div class="alert alert--success" v-if="errors.length === 0 && displayAlert">
        Formulaire bien envoyé
      </div>
      <div class="alert alert--error" v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error.id">
            <i class="fas fa-rocket"></i> {{ error }}
          </li>
        </ul>
      </div>

      <form class="form" @submit.prevent="submitForm">
        <div class="form__field">
          <label class="custom__field">
            <input type="text" v-model="nom" required/>
            <span class="placeholder">Nom*</span>
          </label>
          <label class="custom__field">
            <input type="text" v-model="prenom" required/>
            <span class="placeholder">Prenom*</span>
          </label>
        </div>

        <div class="form__message">
          <textarea name="" rows="7" placeholder="Votre message*" v-model="message" required></textarea>
        </div>

        <div class="form__information">
          <small>*: champ obligatoire</small>
          <span :class="changeColor">
            {{ message.trim().length }}
          </span>
        </div>

        <div class="submit__form">
          <button type="submit" class="submit--btn">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      nom: '',
      prenom: '',
      message: '',
      errors: [],
      displayAlert: false
    }
  },
  computed: {
    changeColor() {
      return {
        'invalid-message': this.message.trim().length < 15, 
        'valid-message': this.message.trim().length >= 15
      }
    }
  },
  methods: {
    submitForm() {
      const trimNom = this.nom.trim()
      const trimPrenom = this.prenom.trim()
      const trimMessage = this.message.trim()

      const regex = /^[a-zA-Z ]+$/

      this.errors = []

      if ( trimNom.length === 0 || trimPrenom.length === 0 || trimMessage.length === 0 ) {
        this.errors.push('Veuillez remplir tous les champs obligatoires')
      } else {
        if ( !regex.test(trimNom) ) {
          this.errors.push('Le nom n\'est pas valide')
        }
        if ( !regex.test(trimPrenom) ) {
          this.errors.push('Le prenom n\'est pas valide')
        }
        if ( trimMessage.length < 15 ) {
          this.errors.push('Le message doit contenir 15 caractères')
        }
      }

      this.errors.length === 0 ? this.displayAlert = true : this.displayAlert = false
    }
  }
}
</script>

<style lang="scss">
$color-success: #4BB543;
$color-error: #ff3333;

.container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.card__form {
  padding: 20px;
  width: 70%;
  border: 3px solid #fd7854;
  box-shadow: 0 0 5px #2c3e50;
  border-radius: 20px;
}

.alert {
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;

  &--success {
    background-color: $color-success;
  }
  &--error {
    background-color: $color-error;

    & .fa-rocket {
      rotate: 45deg;
    }
  }
}

.form {
  
  &__field {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  &__message {
    text-align: center;
    margin-top: 40px;

    & textarea {
      resize: none;
      border-radius: 20px;
      border: 2px solid #ccc;
      padding: 7px;
      width: 75%;
      font: 14px cursive;

      &:required,&:invalid { box-shadow:none; }

      &:focus, &:valid {
        border-color: #222;
      }
    }
  }

  &__information {
    display: flex;
    justify-content: space-between;
      font-style: italic;
    & span {
      &.valid-message {
        color: $color-success;
      }
      &.invalid-message {
        color: $color-error;
      }
    }
  }
}

// style input

.custom__field {
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
  
  & input {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f2f2f2;
    padding: 12px;
    border-radius: 3px;
    width: 250px;
    outline: none;
    font-size: 14px;
    border-radius: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background:
      linear-gradient(90deg, #222, #222) center bottom/0 0.15em no-repeat,
      linear-gradient(90deg, #ccc, #ccc) left bottom/100% 0.15em no-repeat,
      linear-gradient(90deg, #fafafa, #fafafa) left bottom/100% no-repeat;
    transition: background-size 0.3s ease;

    &:required,&:invalid { box-shadow:none; }
  }
  
  & .placeholder {
    position: absolute;
    left: 12px;
    top: calc(50% + 10px);
    transform: translateY(-50%);
    color: #aaa;
    transition: 
      top 0.3s ease,
      color 0.3s ease,
      font-size 0.3s ease;
  }
  
  & input:valid + .placeholder,
  & input:focus + .placeholder {
    top: 10px;
    font-size: 10px;
    color: #222;
  }
  
  & input:valid,
  & input:focus {
    background-size: 100% 0.15em, 100% 0.1em, 100%;
  }
}

// 

// style button

.submit {
  &__form {
    margin-top: 40px;
    text-align: center;
  }

  &--btn {
    width: 200px;
    height: 60px;
    background: none;
    border: 4px solid;
    color: #ccc;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    position: relative;

    &::before, &::after {
      content: "";
      position: absolute;
      width: 14px;
      height: 4px;
      background: #fff;
      transform: skewX(50deg);
      transition: .4s linear;
    }

    &::before {
      top: -4px;
      left: 10%;
    }

    &::after {
      bottom: -4px;
      right: 10%;
    }

    &:hover {
      color: #222;

      &::before {
        left: 80%;
      }
      &::after {
        right: 80%;
      }
    }
  }
}

// 
</style>