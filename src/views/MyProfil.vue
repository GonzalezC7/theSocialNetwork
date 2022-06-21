<template>
  <h2 class="titleMyProfil">Voir mon Profil</h2>
  <button class="profil-button" @click="goHome()">Page principale</button>
  <div id="mainContainer" class="mainContainer">
    <div class="pMyProfil">
      <p class="pFirstName">Mon Prénom : {{ firstname }}</p>
      <p class="pLastName">Mon Nom : {{ lastname }}</p>
      <p class="pEmail">Mon Email : {{ email }}</p>
      <p class="pAge">Mon Age : {{ age }} ans</p>
      <p class="pOccupation">Mon Métier : {{ occupation }}</p>
    </div>
    <button @click="getUser" class="myProfil-button">
      Afficher mon Profil
    </button>

    <p v-if="result === true" class="success">Votre profil</p>
    <p v-else-if="result === false" class="error">
      Désolé ... Nous ne pouvons afficher votre Profil !
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
    async getUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/user",
        options
      );

      const data = await response.json();

      this.result = data.success;

      console.log(data);
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email = data.email;
      this.age = data.age;
      this.occupation = data.occupation;
    },
    goHome() {
      this.$router.push({ name: "Welcome" });
    },
  },
};
</script>

<style>
.profil-button {
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

.profil-button:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

.myProfil-button {
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

.myProfil-button:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
