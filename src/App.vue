<template>
  <div class="container">
    <MainPage></MainPage>
  </div>
</template>

<script setup>
import MainPage from "./views/MainPage.vue";
</script>

<style>
@font-face {
  font-family: "GilRoy";
  src: url("./assets/fonts/Gilroy-Medium.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0D0D0D;
  font-family: "Gilroy";
  font-style: normal;
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
