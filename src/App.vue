<template>
  <div class="container">
    <MainPage></MainPage>
  </div>
</template>

<script setup>
import MainPage from "./views/MainPage.vue";
</script>

<style lang="scss">
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
  scroll-behavior: smooth;
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

.custom-scroll {
  scrollbar-width: thin;
  /* Firefox scrollbar */
  scrollbar-color: rgb( 255 255 255 / 30%);
  ;
  /* Firefox scrollbar */
  background: #0D0D0D;

  &::-webkit-scrollbar {
    width: 8px;
    overflow: auto;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgb(255 255 255 / 30%);
  }
}
</style>
