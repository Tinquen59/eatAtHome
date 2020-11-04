<template>
  <div class="container">
    <form class="form">
      <!-- <div class="form__field">
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
      </div> -->
      <div class="form__field">
        <label class="custom__field">
          <input type="text" required/>
          <span class="placeholder">Nom*</span>
        </label>
        <label class="custom__field">
          <input type="text" required/>
          <span class="placeholder">Nom*</span>
        </label>
      </div>

      <div class="form__message">
        <textarea name="" id="" rows="7" placeholder="Votre message*" required></textarea>
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
  }
  &__message {
    text-align: center;
    margin-top: 40px;

    & textarea {
      resize: none;
      border-radius: 20px;
      border: 2px solid #cccccc;
      padding: 7px;
      width: 75%;

      &:required,&:invalid { box-shadow:none; }

      &:focus, &:valid {
        border-color: #222;
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


.submit {
  &__form {
    margin-top: 40px;
    text-align: center;
  }
}
</style>