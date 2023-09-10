<template>
    <section>
        <div class="form-section">
            <h2 class="form-section_title">Заполните формы</h2>
            <p class="form-section_step">Шаг 1</p>
            <form @submit.prevent="sendData()" class="form">
                <h3 class="form_recommender">Рекомендатель</h3>
                <!-- <BaseInput></BaseInput>
                <BaseInput></BaseInput> -->
                <label for="name">Имя и&nbsp;фамилия</label>
                <input type="text" id="name" required>
                <label for="email">Email</label>
                <input type="email" id="email" required>
                <label for="phone">Номер телефона</label>
                <input type="tel" id="phone" required>
                <BaseCheckbox v-model="checked"></BaseCheckbox>
            </form>
            <div class="form-section_btn">
                <BaseButton class="custom-btn">Шаг 2</BaseButton>
            </div>
        </div>
        <footer class="footer">
            Юридический дисклеймер о&nbsp;ПСБ Лаб (правила акции, ссылки на&nbsp;юридические документы, сноски
            по&nbsp;тексту)
        </footer>
    </section>
</template>

<script setup>
import BaseButton from './BaseElements/BaseButton.vue';
import BaseCheckbox from './BaseElements/BaseCheckbox.vue';
// import BaseInput from './BaseElements/BaseInput.vue';

import { ref } from 'vue'
const checked = ref(false)

const sendData = () => {
    console.log('sendData')
}
</script>

<style lang="scss" scoped>
.form-section {
    max-width: 100%;

    @media screen and (min-width: 320px) {
        padding: 0 calc(50% - 155px) 66px;
    }

    @media screen and (min-width: 375px) {
        padding: 0 calc(50% - 177px) 60px;
    }

    @media screen and (min-width: 390px) {
        padding: 0 calc(50% - 187px) 60px;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 calc(50% - 472px) 100px;
    }

    @media screen and (min-width: 1920px) {
        padding: 0 calc(50% - 880px) 120px;
    }

    &_title {
        color: #FFF;
        font-size: 30px;
        font-weight: 700;
        line-height: normal;
    }

    &_step {
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        line-height: normal;
        padding: 12px 0;
    }

    &_btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.form {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    gap: 12px;
    border-radius: 20px 20px 1px 20px;
    margin-bottom: 32px;
    background: rgba(255, 255, 255, 1);

    &_recommender {
        color: #111;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
    }
}

.footer {
    color: #A1A1A1;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
}

.custom-btn {
    font-size: 16px;
    padding: 20px 24px;
    width: 160px;
}
</style>