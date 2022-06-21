<template>
  <div class="login">
    <h2 class="titleLogin">Rentrez vos identifiants de connexion</h2>
    <button class="login-button" @click="goHome()">Page principale</button>
  </div>
  <div id="mainContainer">
    <form @submit.prevent="login">
      <div class="input-container">
        <label for="emailInput"></label>
        <input
          type="email"
          class="inputLogin"
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
          class="inputLogin"
          id="passwordInput"
          v-model="password"
          placeholder="Mot de passe"
          required
        />
      </div>

      <input class="login-button" type="submit" value="Valider" />
    </form>

    <p v-if="result === true" class="success">
      Connexion réussie
      <br />
      <!-- Token: {{ token }} -->
    </p>
    <p v-else-if="result === false" class="error">Connexion échouée</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      result: null,
      token: "",
    };
  },

  methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/login",
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
.login-button {
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

.login-button:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
