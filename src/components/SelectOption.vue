<template>
  <section class="section">
    <h1 class="section_title">Ответы на вопросы</h1>
    <div class="wrapper-dropdown" v-for="(n, index) in data" :key="n" @click.stop="showHiddenText(index)">
      <div class="wrapper-dropdown_select">
        <p class="wrapper-dropdown_title">{{ data[index].title }}</p>
        <svg :class="['wrapper-dropdown_cross', checked ? 'active' : '']" xmlns="http://www.w3.org/2000/svg" width="40"
          height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          <path
            d="M18.72 12.16C18.72 12.0716 18.7916 12 18.88 12H21.12C21.2084 12 21.28 12.0716 21.28 12.16V27.84C21.28 27.9284 21.2084 28 21.12 28H18.88C18.7916 28 18.72 27.9284 18.72 27.84V12.16Z"
            fill="#0D0D0D" />
          <path
            d="M12.16 21.28C12.0716 21.28 12 21.2084 12 21.12V18.88C12 18.7916 12.0716 18.72 12.16 18.72H27.84C27.9284 18.72 28 18.7916 28 18.88V21.12C28 21.2084 27.9284 21.28 27.84 21.28H12.16Z"
            fill="#0D0D0D" />
        </svg>
      </div>
      <div class="wrapper-dropdown_hidden" ref="hiddenWrapper">
        <p class="wrapper-dropdown_text" ref="hiddenText">
          {{ data[index].text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hiddenWrapper = ref(null);
const hiddenText = ref(null);
const checked = ref(false);
const data = ref([
  {
    title: "Какие этапы отбора нужно пройти моему другу?",
    text: " Предварительно рекрутер по телефону общается с кандидатом и назначает время для технического интервью с руководителем. После успешного технического интервью кандидату направляется оффер.",
  },
  {
    title:
      "Как я узнаю статус и результат рассмотрения моего друга на вакансию?",
    text: "По электронной почте, которую вы оставили в анкете, вы будете получать уведомления об итогах каждого этапа.",
  },
  {
    title: "Когда я получу 100 000 рублей?",
    text: "После прохождения испытательного срока друга, вы в течение 2 недель подписываете договор «Дарения». Выплата в течение 5 рабочих дней после подписания договора.",
  },
  {
    title: "Как мне оплатить налог с выплаты?",
    text: "Мы перечислим его за вас, вы получите сумму за вычетом 13% НДФЛ - 100 000 рублей на ваш счет.",
  },
  {
    title: "Могу ли я рекомендовать самого себя?",
    text: "По правилам программы, вы не можете рекомендовать самого себя. Но вы можете обратиться к своему другу, который вас порекомендует :)",
  },
  {
    title: "Если у меня несколько друзей, могу ли я получить выплаты за всех?",
    text: "Можете.",
  },
]);

const showHiddenText = (index) => {
  checked.value = !checked.value;
  let hiddenNode = hiddenWrapper.value[index];
  if (hiddenNode.clientHeight) {
    hiddenNode.style.height = 0;
  } else {
    let padding = 5;
    let clientHeight = hiddenText.value[index].clientHeight;
    hiddenNode.style.height = clientHeight + padding + "px";
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0 calc(50% - 880px) 120px;

  &_title {
    color: #fff;
    font-size: 100px;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 80px;
  }
}

.wrapper-dropdown {
  width: 1760px;
  min-height: 88px;
  padding: 4px 24px;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  outline: none;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &_select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  &_title {
    display: flex;
    align-items: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
  }

  &_cross {
    display: flex;
    align-items: center;
    margin: 0 10px;
    transform: rotate(0deg);
    transition: transform 0.5s;

    &.active {
      transform: rotate(-45deg);
    }
  }

  &_hidden {
    border-radius: 0 0 12px 12px;
    padding-right: 50px;
    background: #fff;
    overflow: hidden;
    height: 0;
    transition: height .5s;
  }

  &_text {
    font-size: 32px;
    font-style: normal;
    line-height: 35px;
    font-weight: normal;
  }

}
</style>