<template>
  <h2 class="titleEditProfil">Éditer mon Profil</h2>

  <div class="profil">
    <h2 class="titleProfil"></h2>
    <button class="profil-button" @click="goHome()">Page principale</button>
  </div>
  <div id="mainContainer" class="mainContainer">
    <form @submit.prevent="user">
      <div class="input-container">
        <label for="firstnameInput"></label>
        <input
          type="text"
          class="inputProfil"
          id="firstNameInput"
          v-model="firstname"
          placeholder="Prénom"
          required
        />
      </div>

      <div class="input-container">
        <label for="lastnameInput"></label>
        <input
          type="text"
          class="inputProfil"
          id="lastNameInput"
          v-model="lastname"
          placeholder="Nom"
          required
        />
      </div>

      <div class="input-container">
        <label for="emailInput"></label>
        <input
          type="email"
          class="inputProfil"
          id="emailInput"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="input-container">
        <label for="ageInput"></label>
        <input
          type="number"
          class="inputProfil"
          id="ageInput"
          v-model="age"
          placeholder="Age"
          required
        />
      </div>

      <div class="input-container">
        <label for="occupationInput"></label>
        <input
          type="text"
          class="inputProfil"
          id="occupationInput"
          v-model="occupation"
          placeholder="Métier"
          required
        />
      </div>

      <input
        class="profil-button2"
        type="submit"
        value="Enregistrer mon Profil"
      />
    </form>

    <p v-if="result === true" class="success">
      Super : Votre profil est bien enregistré !
      <br />
      <!-- Token: {{ token }} -->
    </p>
    <p v-else-if="result === false" class="error">
      Oups... Une erreur est survenue !
    </p>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      occupation: "",
      result: null,
      token: "",
    };
  },

  methods: {
    async user() {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          age: this.age,
          occupation: this.occupation,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/user",
        options
      );

      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
    },
    goHome() {
      this.$router.push({ name: "Welcome" });
    },
  },
};
</script>

<style>
.profil-button2 {
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

.profil-button2:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
