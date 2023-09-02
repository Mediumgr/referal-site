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

<script>
import SvgCircle from "./UI/SvgCicrle.vue";

export default {
  name: "RulesInfo",
  components: {
    SvgCircle,
  },
};
</script>

<style lang="scss" scoped>
.info-rules {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1920px;
  grid-gap: 64px;
  padding: 40px calc(50% - 880px) 100px;
  background: #0d0d0d;
}

.info-section {
  padding: 40px 80px;
  &_text {
    display: grid;
    grid-template-columns: auto 2fr;
  }
  &_content {
    display: grid;
    grid-gap: 40px;
  }
  &_title {
    color: #111;
    font-family: "Gilroy";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 10px 0 80px 0;
  }
  &_recomendation {
    color: #111;
    font-family: "Gilroy";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 10px 0 16px;
  }
  &_description {
    color: #1b232f;
    font-family: "Gilroy";
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.info-participation {
  height: 848px;
  border-radius: 120px 120px 1px 120px;
  background: #fff;
}
.info-recomendation {
  height: 848px;
  border-radius: 120px 120px 120px 1px;
  background: #fff;
}
.info-content-description {
  color: #1b232f;
  font-family: "Gilroy";
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
