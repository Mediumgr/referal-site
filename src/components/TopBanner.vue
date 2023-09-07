<template>
  <div class="top-banner">
    <img class="top-banner_logoImage" src="../assets/img/logo.png" alt="logo" />
    <h1 class="top-banner_text">Рекомендуй друга в ит получи</h1>
    <img class="top-banner_arrowImage" src="../assets/img/rightArrow.png" alt="logo" />
    <div class="top-banner_costs">
      <h1 class="top-banner_price">100 000</h1>
      <img class="top-banner_image" src="../assets/img/rouble.png" alt="рублей" />
    </div>
    <img class="top-banner_psbLogoImage" src="../assets/img/psblogo.png" alt="logo" />
    <BaseButton class="custom-btn">Рекомендовать друга</BaseButton>
    <img class="top-banner_triangleImage" src="../assets/img/trianglelogo.png" alt="logo" />
  </div>
</template>

<script setup>
import BaseButton from "./BaseElements/BaseButton.vue";
</script>

<style lang="scss" scoped>
.top-banner {
  display: grid;
  grid-template-columns: repeat(3, auto);
  height: auto;
  margin: 0 auto;
  grid-template-areas:
    'logo text arrow'
    '. costs .'
    'psbLogo btn triangle';

  @media screen and (min-width: 320px) and (max-width: 374.98px) {
    width: 310px;
    padding-top: 30px;
    grid-template-areas:
      'psbLogo . arrow'
      'text text text'
      'costs costs costs'
      'btn btn btn'
      'logo  . triangle';
  }

    @media screen and (min-width: 375px) and (max-width: 389.98px) {
    width: 354px;
    padding-top: 30px;
     grid-template-areas:
      'psbLogo . arrow'
      'text text text'
      'costs costs costs'
      'btn btn btn'
      'logo  . triangle';
  }

  @media screen and (min-width: 390px) and (max-width: 1023.98px) {
    width: 374px;
    padding-top: 39px;
    grid-template-areas:
      'psbLogo . arrow'
      'text text text'
      'costs costs costs'
      'btn btn btn'
      'logo  . triangle';
  }

  @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
    width: 944px;
    padding-top: 27px;
  }

  @media screen and (min-width: 1920px) {
    width: 1850px;
  }

  &_logoImage {
    grid-area: logo;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      width: 108px;
      height: 104px;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      width: 128px;
      height: 124px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 170px;
      height: 165px;
    }

    @media screen and (min-width: 1920px) {
      width: 306px;
      height: 297px;
      padding: 65px 0 0 48px;
      box-sizing: content-box;
    }
  }

  &_arrowImage {
    grid-area: arrow;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      width: 70px;
      height: 75px;
      align-self: end;
      justify-self: end;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      width: 90px;
      height: 95px;
      align-self: end;
      justify-self: end;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 182px;
      height: 192px;
      padding: 53px 0 0 0;
      box-sizing: content-box;
    }

    @media screen and (min-width: 1920px) {
      width: 396px;
      height: 417px;
      justify-self: end;
      padding: 20px 20px 0 0;
      box-sizing: content-box;
    }
  }

  &_text {
    color: #fff;
    text-align: center;
    line-height: normal;
    text-transform: uppercase;
    font-weight: 500;
    grid-area: text;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      font-size: 30px;
      padding: 30px 0 10px 0;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      font-size: 41px;
      padding: 50px 0 10px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      font-size: 48px;
      padding: 53px 75px 0 76px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 82px;
      padding: 90px 115px 0;
    }
  }

  &_costs {
    display: grid;
    grid-area: costs;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      display: flex;
      justify-content: center;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      display: flex;
      justify-content: center;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      align-items: self-end;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: 177px;
    }

    @media screen and (min-width: 1920px) {
      grid-template-columns: auto 80px;
      grid-template-rows: 200px;
    }
  }

  &_price {
    background: -webkit-linear-gradient(285deg,
        #fc0 15%,
        #ff5940 35%,
        #7f40ff 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      font-size: 60px;
    }

    @media screen and (min-width: 375px) and (max-width: 389.98px) {
      font-size: 60px;
    }

    @media screen and (min-width: 390px) and (max-width: 1023.98px) {
      font-size: 90px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      font-size: 136px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 200px;
      justify-self: end;
    }

  }

  &_image {
    align-self: end;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      width: 16px;
      height: 16px;
      margin: 0 0 14px 0;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      width: 16px;
      height: 16px;
      margin: 0 18px 21px 0;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 32px;
      height: 32px;
      margin-bottom: 30px;
    }

  }

  &_psbLogoImage {
    grid-area: psbLogo;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      width: 130px;
      height: 125px;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      width: 150px;
      height: 145px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 190px;
      height: 196px;
    }

    @media screen and (min-width: 1920px) {
      padding: 0 0 0 80px;
      width: 415px;
      height: 428px;
      box-sizing: content-box;
    }
  }

  &_triangleImage {
    grid-area: triangle;

    @media screen and (min-width : 320px) and (max-width: 374.98px) {
      width: 93px;
      height: 93px;
      align-self: end;
      margin-top: 60px;
    }

    @media screen and (min-width: 375px) and (max-width: 1023.98px) {
      width: 113px;
      height: 113px;
      align-self: end;
      margin-top: 60px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
      width: 210px;
      height: 210px;
    }

    @media screen and (min-width: 1920px) {
      padding-right: 119px;
    }
  }
}

.custom-btn {
  grid-area: btn;
  align-self: center;

  @media screen and (min-width : 320px) and (max-width: 374.98px) {
    font-size: 14px;
    padding: 22px 26px;
    margin: 37px 0 50px 0;
  }

  @media screen and (min-width: 375px) and (max-width: 1023.98px) {
    font-size: 16px;
    padding: 22px 26px;
    margin: 37px 0 50px 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1919.98px) {
    font-size: 20px;
    padding: 21px 35.5px;
  }

  @media screen and (min-width: 1920px) {
    padding: 27.5px 51px;
  }
}</style>
