<template>
  <div class="top-banner">
    <div class="top-banner__logo">
      <img
        class="top-banner__logoImage"
        src="../assets/img/logo.png"
        alt="logo"
      />
      <img
        class="top-banner__psbLogoImage"
        src="../assets/img/psblogo.png"
        alt="logo"
      />
    </div>
    <div class="top-banner__information">
      <h1 class="top-banner__text">Рекомендуй друга в ит получи</h1>
      <div class="top-banner__costs">
        <h1 class="top-banner__price">100 000</h1>
        <img class="top-banner__image" src="../assets/img/rouble.png" alt="рублей" />
      </div>
      <BaseButton> Рекомендовать друга </BaseButton>
    </div>
    <div class="top-banner__arrow">
      <img
        class="top-banner__arrowImage"
        src="../assets/img/rightArrow.png"
        alt="logo"
      />
      <img
        class="top-banner__triangleImage"
        src="../assets/img/trianglelogo.png"
        alt="logo"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseElements/BaseButton.vue";

export default {
  name: "TopBanner",
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.top-banner {
  display: grid;
  grid-template-columns: 1.1fr 1.8fr 1.1fr;
  height: auto;
  width: 1920px;
  background: #0d0d0d;
  &__logo {
    display: grid;
    grid-gap: 191px;
  }
  &__arrow {
    display: grid;
    grid-gap: 161px;
    justify-items: self-end;
  }
  &__logoImage {
    width: 306px;
    height: 296.5px;
    padding: 65px 0 0 48px;
  }
  &__arrowImage {
    width: 393px;
    height: 417px;
    padding: 20px 20px 0 0;
  }
  &__information {
    display: grid;
    grid-template-rows: 395px 361px auto;
  }
  &__text {
    color: #fff;
    text-align: center;
    font-family: Gilroy;
    font-size: 82px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    padding: 90px 90px 0;
  }
  &__costs {
    display: grid;
    grid-template-columns: 11fr 1fr;
    grid-template-rows: 200px;
  }
  &__price {
    text-align: center;
    font-family: "Gilroy";
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    background: -webkit-linear-gradient(
      285deg,
      #fc0 15%,
      #ff5940 35%,
      #7f40ff 60%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__image {
    align-self: flex-end;
  }
  &__psbLogoImage {
    padding: 0 0 0 88px;
  }
  &__triangleImage {
    padding: 0 164px 156px 0;
  }
}
</style>
