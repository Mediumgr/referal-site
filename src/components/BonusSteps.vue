<template>
  <section class="section">
    <SvgAnimations></SvgAnimations>
    <h1 class="title">6&nbsp;шагов для получения бонуса</h1>
    <div class="section-steps">
      <div class="step stepOne">
        <h1 class="digit">1</h1>
        <p class="text">Ты&nbsp;(рекомендатель) и&nbsp;твой друг (кандидат) заполняете формы</p>
      </div>
      <div class="step stepTwo">
        <h1 class="digit">2</h1>
        <p class="text">Вам на&nbsp;электронную почту приходит подтверждение</p>
      </div>
      <div class="step stepThree">
        <h1 class="digit">3</h1>
        <p class="text">Заявки рассматриваются до&nbsp;5&nbsp;рабочих дней</p>
      </div>
      <div class="step stepSix">
        <h1 class="digit">6</h1>
        <p class="text">В&nbsp;течение 7&nbsp;рабочих дней после подписания договора ты&nbsp;получаешь выплату</p>
      </div>
      <div class="step stepFive">
        <h1 class="digit">5</h1>
        <p class="text">Когда друг пройдет испытательный срок, мы&nbsp;вышлем тебе электронный договор</p>
      </div>
      <div class="step stepFour">
        <h1 class="digit">4</h1>
        <p class="text">В&nbsp;случае успешного собеседования, твой друг трудоустраивается</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgAnimations from './UI/SvgAnimations.vue'
</script>

<style lang="scss" scoped>
.section {
  max-width: 100%;
  position: relative;

  @media screen and (min-width: 320px) {
    padding: 0 calc(50% - 155px) 60px;
  }

  @media screen and (min-width: 375px) {
    padding: 0 calc(50% - 177px) 60px;
  }

  @media screen and (min-width: 390px) {
    padding: 0 calc(50% - 187px) 60px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 calc(50% - 472px) 115px;
  }

  @media screen and (min-width: 1920px) {
    padding: 0 calc(50% - 880px) 120px;
  }

  &-steps {
    display: grid;

    @media screen and (min-width: 320px) {
      grid-row-gap: 10px;
      grid-template-areas:
        'stepOne'
        'stepTwo'
        'stepThree'
        'stepFour'
        'stepFive'
        'stepSix';
    }

    @media screen and (min-width: 375px) {
      grid-row-gap: 12px;
    }

    @media screen and (min-width: 1024px) {
      grid-row-gap: 24px;
    }

    @media screen and (min-width: 1920px) {
      grid-template-areas:
        'stepOne stepTwo stepThree'
        'stepSix stepFive stepFour';
      grid-column-gap: 70px;
      grid-row-gap: 100px;
    }
  }
}

.title {
  color: #fff;
  line-height: normal;
  font-weight: 700;

  @media screen and (min-width: 320px) {
    font-size: 32px;
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 100px;
    padding-bottom: 80px;
  }
}

.step {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  z-index: 1;

  @media screen and (min-width: 320px) {
    min-height: 120px;
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    padding: 0 6px;
  }

  @media screen and (min-width: 375px) {
    padding: 0 8px;
  }

  @media screen and (min-width: 1024px) {
    min-height: 160px;
    width: 580px;
    border: 4px solid rgba(0, 0, 0, 0.6);
    border-radius: 40px;
    padding: 0 24px;
  }

  @media screen and (min-width: 1920px) {
    min-height: 280px;
    width: 540px;
  }

  .digit {
    color: #fff;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 320px) {
      font-size: 55px;
    }

    @media screen and (min-width: 375px) {
      font-size: 60px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 120px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 197px;
    }
  }

  .text {
    color: #fff;
    font-weight: 400;
    line-height: normal;

    @media screen and (min-width: 320px) {
      font-size: 18px;
      padding: 0 20px 0 25px;
    }

    @media screen and (min-width: 375px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 28px;
    }
  }
}

.stepOne {
  grid-area: stepOne;
}

.stepTwo {
  grid-area: stepTwo;

  @media screen and (min-width: 1024px) {
    justify-self: center;
  }
}

.stepThree {
  grid-area: stepThree;

  @media screen and (min-width: 1024px) {
    justify-self: end;
  }
}

.stepFour {
  grid-area: stepFour;
}

.stepFive {
  grid-area: stepFive;

  @media screen and (min-width: 1024px) {
    justify-self: center;
  }
}

.stepSix {
  grid-area: stepSix;

  @media screen and (min-width: 1024px) {
    justify-self: end;
  }
}
</style>
