<template>
  <div class="wrapper">
    <nav>
      <router-link to="/page01">| Inscription |</router-link>
      <router-link to="/page02">| Connexion |</router-link>
      <router-link to="/page03">| Écrire un Message |</router-link>
      <router-link to="/page04">| Voir tous les Messages |</router-link>
      <router-link to="/page05">| Éditer mon Profil |</router-link>
      <router-link to="/page06">| Voir mon Profil |</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  text-align: center;
  margin: 5px;
}

body {
  max-width: 100vw;
  height: 100vh;
  font-family: sans-serif;
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
}

h2 {
  text-align: center;
  color: rgb(211, 173, 82);
  margin: 30px;
}

button {
  margin: 30px;
}
</style>
