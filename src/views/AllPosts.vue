<template>
  <div class="posts">
    <h2 class="titlePosts">Tous vos Messages</h2>
  </div>
  <div id="mainContainer" class="mainContainer">
    <div class="bigBoxPosts" v-for="(item, index) in this.message" :key="index">
      <div class="boxPosts">
        <p class="pTitle">{{ item.title }}</p>
        <!-- <br /> -->
        <p class="pMessage">{{ item.content }}</p>
        <!-- <br /> -->
        <p class="pUserName">{{ item.firstname }} {{ item.lastname }}</p>
        <input type="button" @click="postLike" :id="item._id" value="like" />
      </div>
    </div>
    <button @click="posts" class="posts-button">Afficher les messages</button>

    <p v-if="result === true" class="success">Merci pour votre message :)</p>
    <p v-else-if="result === false" class="error">
      Erreur ! Impossible de poster votre message !
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
      date: "",
      firstname: "",
      lastname: "",
      result: null,
      token: "",
      message: "",
      id: "",
    };
  },

  methods: {
    async posts() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/posts",
        options
      );

      const data = await response.json();

      this.result = data.success;
      this.message = data.posts;
      if (data.success === true) {
        this.token = data.token;
      }
    },

    postLike(e) {
      // console.log(e.target.id);
      let id = e.target.id;
      document.getElementById(id).style.backgroundColor = "blue";
      document.getElementById(id).style.color = "white";
    },

    async postLike(e) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          postId: (this.postId = e.target.id),
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/fakebook-reseau/post/like",
        options
      );

      const item = await response.json();
      console.log(item);
    },
  },
};
</script>

<style>
.posts-button {
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

.posts-button:hover {
  box-shadow: rgba(255, 255, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.2) 0 1px 2px, rgba(255, 255, 255, 0.2) 0 2px 4px,
    rgba(255, 255, 255, 0.2) 0 4px 8px, rgba(255, 255, 255, 0.2) 0 8px 16px,
    rgba(255, 255, 255, 0.2) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
