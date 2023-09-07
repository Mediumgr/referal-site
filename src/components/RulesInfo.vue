<template>
  <div class="info-rules">
    <div class="info-participation">
      <div class="info-section">
        <h2 class="info-section_title">Кто может участвовать</h2>
        <div class="info-section_content">
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-section_description">
              Твой друг — ИТ-специалист <br />
              с опытом работы более 2-х лет.
            </p>
          </div>
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-section_description">
              Твой друг, который не проходил собеседования в ПСБ в течение
              <br />
              6 месяцев до рекомендации.
            </p>
          </div>
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-section_description">
              Ты сам не работал в ПСБ в течение 12 месяцев до рекомендации.
            </p>
          </div>
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-section_description">
              ИТ-рекрутер тоже может участвовать в программе на тех же условиях.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="info-recomendation">
      <div class="info-section">
        <h2 class="info-section_recomendation">
          Как твоя рекомендация поможет другу
        </h2>
        <div class="info-section_content">
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-content-description">
              Его резюме попадет в базу кадрового резерва ПСБ Лаб и ПСБ.
            </p>
          </div>
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-content-description">
              Твой друг будет заниматься интересными проектами банковских
              ИТ-систем.
            </p>
          </div>
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-content-description">
              Твой друг будет работать <br />
              в аккредитованной ИТ-компании.
            </p>
          </div>
          <div class="info-section_text">
            <SvgCircle></SvgCircle>
            <p class="info-content-description">
              Ему нужно будет пройти всего <br />
              1 техническое собеседование.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgCircle from "./UI/SvgCicrle.vue";
</script>

<style lang="scss" scoped>
.info-rules {
  @media screen and (min-width: 320px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    padding: 40px calc(50% - 155px) 40px;
  }

  @media screen and (min-width: 375px) {
    grid-gap: 24px;
    padding: 60px calc(50% - 177px) 60px;
  }

  @media screen and (min-width: 390px) {
    padding: 60px calc(50% - 187px) 60px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    padding: 85px calc(50% - 472px) 100px;
  }

  @media screen and (min-width: 1920px) {
    grid-gap: 64px;
    padding: 120px calc(50% - 880px) 120px;
  }
}

.info-section {
  padding: 16px;

  @media screen and (min-width: 1024px) {
    padding: 40px 40px 33px 40px;
  }

  @media screen and (min-width: 1920px) {
    padding: 60px 80px 80px;
  }

  &_text {
    display: grid;
    grid-template-columns: auto 2fr;

    @media screen and (min-width: 320px) {
      padding-right: 10px;
    }

    @media screen and (min-width: 375px) {
      padding-right: 12px;
    }

    @media screen and (min-width: 1024px) {
      padding-right: 40px;
    }

    @media screen and (min-width: 1920px) {
      padding-right: 0;
    }

    >svg {
      width: 21px;
      height: 21px;

      @media screen and (min-width: 1920px) {
        width: 44px;
        height: 44px;
      }
    }

  }

  &_content {
    display: grid;

    @media screen and (min-width: 320px) {    
      grid-gap: 12px;
    }

    @media screen and (min-width: 1024px) {
      grid-gap: 28px;
    }

    @media screen and (min-width: 1920px) {
      grid-gap: 40px;
    }
  }

  &_title {
    color: #111;
    line-height: normal;

    @media screen and (min-width: 320px) {
      padding-bottom: 12px;
    }

    @media screen and (min-width: 1024px) {
      padding-bottom: 70px;
      font-size: 32px;
    }

    @media screen and (min-width: 1920px) {
      padding-bottom: 90px;
      font-size: 48px;
      font-weight: 700;
    }
  }

  &_recomendation {
    color: #111;
    line-height: normal;
    font-weight: 700;

    @media screen and (min-width: 320px) {
      padding-bottom: 12px;
    }

    @media screen and (min-width: 1024px) {
      padding-bottom: 32px;
      font-size: 32px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 48px;
      padding-bottom: 32px;
    }
  }

  &_description {
    color: #1b232f;
    line-height: normal;
    font-weight: 400;

    @media screen and (min-width: 320px) {
      font-size: 16px;
    }

    @media screen and (min-width: 375px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 38px;
    }
  }
}

.info-participation {
  border-radius: 20px 20px 1px 20px;
  background: #fff;

  @media screen and (min-width: 1024px) {
    border-radius: 60px 60px 1px 60px;
  }

  @media screen and (min-width: 1920px) {
    border-radius: 120px 120px 1px 120px;
  }
}

.info-recomendation {
  background: #fff;

  @media screen and (min-width: 320px) {
    border-radius: 20px 1px 20px 20px;
  }

  @media screen and (min-width: 1024px) {
    border-radius: 60px 60px 60px 1px;
  }

  @media screen and (min-width: 1920px) {
    border-radius: 120px 120px 120px 1px;
  }
}

.info-content-description {
  color: #1b232f;
  line-height: normal;
  font-weight: 400;

  @media screen and (min-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 38px;
  }
}
</style>
