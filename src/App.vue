<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
}

@font-face {
  font-family: "GilRoy";
  src: url("./assets/fonts/Gilroy-Medium.ttf");
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
