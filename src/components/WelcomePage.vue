<template>
  <div class="box">
    <h1 class="h1">BIENVENUE SUR FRIENDSGRAM</h1>
    <h2 class="h2">L'appli pour discuter avec tes Amis</h2>
  </div>
</template>

<script>
export default {
  name: "MaHome",
  components: {},
};
</script>

<style>
.box {
  margin-top: 100px;
  margin-left: 22%;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  height: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
}

.box:hover {
  transform: scale(1.2);
}

.h1 {
  font-weight: 900;
  margin: 30px;
  color: darkblue;
  text-shadow: rgb(255, 255, 255) 1px 0 10px;
}

.h2 {
  font-size: x-large;
  font-weight: 700;
  margin-left: 25%;
  color: darkblue;
  text-shadow: rgb(255, 255, 255) 1px 0 10px;
}
</style>
