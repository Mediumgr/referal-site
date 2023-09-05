<template>
  <div class="top-banner">
    <div class="top-banner__logo">
      <img class="top-banner__logoImage" src="../assets/img/logo.png" alt="logo" />
      <img class="top-banner__psbLogoImage" src="../assets/img/psblogo.png" alt="logo" />
    </div>
    <div class="top-banner__information">
      <h1 class="top-banner__text">Рекомендуй друга в ит получи</h1>
      <div class="top-banner__costs">
        <h1 class="top-banner__price">100 000</h1>
        <img class="top-banner__image" src="../assets/img/rouble.png" alt="рублей" />
      </div>
      <BaseButton>Рекомендовать друга</BaseButton>
    </div>
    <div class="top-banner__arrow">
      <img class="top-banner__arrowImage" src="../assets/img/rightArrow.png" alt="logo" />
      <img class="top-banner__triangleImage" src="../assets/img/trianglelogo.png" alt="logo" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from "./BaseElements/BaseButton.vue";
</script>

<style lang="scss" scoped>
.top-banner {
  display: grid;
  height: auto;
  margin: 0 auto;

  @media screen and (min-width: 1920px) {
    grid-template-columns: 1.1fr 1.8fr 1.1fr;
    width: 1920px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
    grid-template-columns: 0.5fr 5fr 0.5fr;
    padding-top: 27px;
    width: 944px;
  }

  &__logo {
    display: grid;

    @media screen and (min-width: 1920px) {
      grid-gap: 191px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      grid-gap: 270px;
    }
  }

  &__arrow {
    display: grid;
    justify-items: self-end;

    @media screen and (min-width: 1920px) {
      grid-gap: 168px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      grid-gap: 152px;
      grid-template-columns: 177px;
      padding-top: 53px;
    }

  }

  &__logoImage {
    @media screen and (min-width: 1920px) {
      width: 306px;
      height: 296.5px;
      padding: 65px 0 0 48px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 170px;
    }
  }

  &__arrowImage {
    @media screen and (min-width: 1920px) {
      width: 393px;
      height: 417px;
      padding: 20px 20px 0 0;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 182px;
      height: 192px;
    }
  }

  &__information {
    display: grid;

    @media screen and (min-width: 1920px) {
      grid-template-rows: 395px 361px auto;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      grid-template-rows: 268px 250px auto;
    }

  }

  &__text {
    color: #fff;
    text-align: center;
    line-height: normal;
    text-transform: uppercase;
    font-weight: 500;

    @media screen and (min-width: 1920px) {
      font-size: 82px;
      padding: 90px 90px 0;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      font-size: 48px;
      padding: 53px 75px 0 75px;
    }
  }

  &__costs {
    display: grid;

    @media screen and (min-width: 1920px) {
      grid-template-columns: 11fr 1fr;
      grid-template-rows: 200px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: 180px;
      align-items: self-end;
    }
  }

  &__price {
    background: -webkit-linear-gradient(285deg,
        #fc0 15%,
        #ff5940 35%,
        #7f40ff 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 1920px) {
      font-size: 200px;
      font-weight: 700;
      text-align: center;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      font-size: 140px;
    }
  }

  &__image {
    align-self: flex-end;

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      padding-bottom: 32px;
    }
  }

  &__psbLogoImage {
    @media screen and (min-width: 1920px) {
      padding: 0 0 0 88px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 191px;
      height: 197px;
    }
  }

  &__triangleImage {
    @media screen and (min-width: 1920px) {
      padding: 0 164px 156px 0;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 210px;
      height: 210px;
    }
  }
}</style>
