<template>
  <div class="register">
    <h2 class="titleRegister">Veuillez-vous inscrire sur cette page</h2>
    <button type="button" class="btn btn-outline-warning" @click="goHome()">
      Warning
    </button>
    <button class="register-button" @click="goHome()">Page principale</button>
  </div>
  <div id="mainContainer" class="mainContainer">
    <form @submit.prevent="register">
      <div class="input-container">
        <label for="emailInput"></label>
        <input
          type="email"
          class="inputRegister"
          id="emailInput"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="input-container">
        <label for="passwordInput"></label>
        <input
          type="password"
          class="inputRegister"
          id="passwordInput"
          v-model="password"
          placeholder="Mot de passe"
          required
        />
      </div>

      <div class="input-container">
        <label for="firstNameInput"></label>
        <input
          type="text"
          class="inputRegister"
          id="firstNameInput"
          v-model="firstname"
          placeholder="Prénom"
          required
        />
      </div>

      <div class="input-container">
        <label for="lastNameInput"></label>
        <input
          type="text"
          class="inputRegister"
          id="lastNameInput"
          v-model="lastname"
          placeholder="Nom"
          required
        />
      </div>

      <input
        class="register-button2"
        type="submit"
        value="Valider Inscription"
      />
    </form>

    <p v-if="result === true" class="success">
      Enregistrement réussie
      <br />
      <!-- Token: {{ token }} -->
    </p>
    <p v-else-if="result === false" class="error">Enregistrement échouée</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      result: null,
      token: "",
    };
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/register",
        options
      );

      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
        localStorage.setItem("token", data.token);
      }
    },
    goHome() {
      this.$router.push({ name: "Welcome" });
    },
  },
};
</script>

<style>
.register-button {
  background-color: rgb(211, 173, 82);
  border-radius: 100px;
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.register-button:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

.register-button2 {
  background-color: rgb(211, 173, 82);
  border-radius: 100px;
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  color: darkblue;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.register-button2:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
