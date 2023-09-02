<template>
  <section class="section">
    <h1 class="title">6 шагов для получения бонуса</h1>
    <div class="section-steps">
      <div class="step">
        <h1 class="digit">1</h1>
        <p class="text">
          Ты (рекомендатель) и твой друг (кандидат) заполняете формы
        </p>
      </div>
      <div class="step">
        <h1 class="digit">2</h1>
        <p class="text">Вам на электронную почту приходит подтверждение</p>
      </div>
      <div class="step">
        <h1 class="digit">3</h1>
        <p class="text">Заявки рассматриваются до 5 рабочих дней</p>
      </div>
      <div class="step">
        <h1 class="digit">6</h1>
        <p class="text">
          В течение 5 рабочих дней после подписания договора ты получаешь
          выплату
        </p>
      </div>
      <div class="step">
        <h1 class="digit">5</h1>
        <p class="text">
          Когда друг пройдет испытательный срок, мы вышлем тебе электронный
          договор
        </p>
      </div>
      <div class="step">
        <h1 class="digit">4</h1>
        <p class="text">
          После успешного собеседования, твой друг трудоустраивается
        </p>
      </div>
    </div>

    <svg
      class="colorLine"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1901 520"
    >
      <g>
        <path d="M0.0566346 11H1848C1870.09 11 1888 28.9086 1888 51V469C1888 491.091 1870.09 509 1848 509H-0.0646973"/>
      </g>
      <defs>
        <filter
          id="filter0_ddf_87_180"
          x="-7.0647"
          y="0"
          width="1908.06"
          height="520"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.305882 0 0 0 0 0.247059 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_87_180"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.917647 0 0 0 0 0.337255 0 0 0 0 0.0862745 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_87_180"
            result="effect2_dropShadow_87_180"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_87_180"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.5"
            result="effect3_foregroundBlur_87_180"
          />
        </filter>
        <linearGradient
          id="paint0_linear_87_180"
          x1="1798.43"
          y1="257.706"
          x2="7.00202"
          y2="257.706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EA5616" />
          <!-- <stop stop-color="#b23fcf"/> -->
          <stop offset="1" stop-color="#4E3FFF" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      class="whiteLine"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1890 502"
    >
      <path d="M-0.00398722 2H1848C1870.09 2 1888 19.9086 1888 42V460C1888 482.091 1870.09 500 1848 500H-0.0644531"/>
    </svg>
  </section>
</template>

<script>
export default {
  name: "BonusSteps",
};
</script>
<style lang="scss" scoped>
.colorLine {
  position: absolute;
  top: 270px;
  left: 0;
  width: 1901px;
  height: 520px;
  fill: none;
  g {
    filter: url("#filter0_ddf_87_180");
  }
  path {
    stroke: url("#paint0_linear_87_180");
    stroke-width: 12;
    stroke-linejoin: round;
    animation: animate 3s ease-in-out infinite;
  }
}

@keyframes animate {
  0% {
    stroke: url("#paint0_linear_87_180");
  }
  35% {
    stroke: #b23fcf;
  }
  50% {
    stroke: #994524;
  }
  75% {
    stroke: #7e2b7b;
  }
  100% {
    stroke: #9d6b47;
  }
}
.whiteLine {
  position: absolute;
  top: 280px;
  left: 0;
  width: 1890px;
  height: 502px;
  fill: none;
  path {
    stroke: white;
    stroke-opacity: 0.8;
    stroke-width: 3;
  }
}
.section {
  background: #0d0d0d;
  padding: 0 calc(50% - 880px) 120px;
  position: relative;
  &-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 70px;
    grid-row-gap: 100px;
  }
}
.title {
  color: #fff;
  font-family: Gilroy;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 80px;
}
.step {
  display: flex;
  width: 540px;
  height: 280px;
  padding: 0 0 0 40px;
  align-items: center;
  border-radius: 40px;
  border: 4px solid rgba(0, 0, 0, 0.6);
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  z-index: 1;
  .digit {
    color: #fff;
    font-family: "Gilroy";
    font-size: 197px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text {
    color: #fff;
    font-family: "Gilroy";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0 20px 0 25px;
  }
}
</style>
