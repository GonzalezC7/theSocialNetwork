<template>
  <div class="post">
    <h2 class="titlePost">Écrire un Message</h2>
    <button class="post-button" @click="goHome()">Page principale</button>
  </div>
  <div id="mainContainer">
    <form @submit.prevent="post">
      <div class="input-container">
        <label for="titleInput"></label>
        <input
          type="text"
          class="inputPost"
          id="titleInput"
          v-model="title"
          placeholder="Titre"
          required
        />
      </div>

      <div class="input-container">
        <label for="contentInput"></label>
        <textarea
          type="text"
          class="inputPostMess"
          id="contentInput"
          v-model="content"
          placeholder="Message"
          required
        />
      </div>

      <input class="post-button2" type="submit" value="Envoyer votre message" />
    </form>

    <p v-if="result === true" class="success">
      Merci ! Votre message est en attente...
    </p>
    <p v-else-if="result === false" class="error">
      Erreur ! Votre message n'a pas pu être posté !
    </p>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
export default {
  data() {
    return {
      title: "",
      content: "",
      result: null,
      email: "",
      password: "",
      token: "",
      firstname: "",
      lastname: "",
    };
  },

  methods: {
    async post() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/post",
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
.post-button {
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

.post-button:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

.post-button2 {
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

.post-button2:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
