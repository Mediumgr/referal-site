<template>
    <section>
        <div class="form-section">
            <h1 class="form-section_title">Заполните формы</h1>
            <p v-if="userWidth < 1024" class="form-section_step">{{ step }}</p>
            <template v-if="userWidth < 1024">
                <form v-if="recommender" @submit.stop.prevent="sendData()">
                    <div class="form">
                        <h3 class="form_recommender">Рекомендатель</h3>
                        <BaseInput v-model="recommenderName" type="text" label="text" text="Имя и&nbsp;фамилия">
                        </BaseInput>
                        <BaseInput v-model="recommenderEmail" type="email" label="email" text="Email"></BaseInput>
                        <BaseInput v-model="recommenderPhone" type="tel" label="tel" text="Номер телефона"></BaseInput>
                        <BaseCheckbox v-model="checked[0]" id="recommender" type="checkbox"></BaseCheckbox>
                    </div>
                    <div class="form-section_btn">
                        <BaseButton class="custom-btn">Шаг 2</BaseButton>
                    </div>
                </form>
                <form v-if="candidate" @submit.stop.prevent="sendData()">
                    <div class="form">
                        <h3 class="form_candidate">Кандидат</h3>
                        <BaseInput v-model="candidateName" type="text" label="text" text="Имя и&nbsp;фамилия">
                        </BaseInput>
                        <BaseInput v-model="candidateEmail" type="email" label="email" text="Email"></BaseInput>
                        <BaseInput v-model="candidatePhone" type="tel" label="tel" text="Номер телефона"></BaseInput>
                        <div class="flexCheckBoxes">
                            <BaseCheckbox v-model="file" id="candidateFile" type="file" class="file"></BaseCheckbox>
                            <span class="tooltip-text">Прикрепить резюме</span>
                            <BaseCheckbox v-model="checked[1]" id="candidate" type="checkbox"></BaseCheckbox>
                        </div>
                    </div>
                    <div class="form-section_btn">
                        <BaseButton class="custom-btn">Отправить</BaseButton>
                    </div>
                </form>
            </template>
            <template v-if="userWidth > 1023">
                <div class="form-container">
                    <form @submit.stop.prevent="sendData()">
                        <div class="form firstForm">
                            <h3 class="form_recommender">Рекомендатель</h3>
                            <BaseInput v-model="recommenderName" type="text" label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="recommenderEmail" type="email" label="email" text="Email"></BaseInput>
                            <BaseInput v-model="recommenderPhone" type="tel" label="tel" text="Номер телефона"></BaseInput>
                            <BaseCheckbox v-model="checked[0]" id="recommender" type="checkbox"></BaseCheckbox>
                        </div>
                        <div class="form-section_btn">
                            <BaseButton class="custom-btn">Отправить</BaseButton>
                        </div>
                    </form>
                    <form>
                        <div class="form">
                            <h3 class="form_candidate">Кандидат</h3>
                            <BaseInput v-model="candidateName" type="text" label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="candidateEmail" type="email" label="email" text="Email"></BaseInput>
                            <BaseInput v-model="candidatePhone" type="tel" label="tel" text="Номер телефона"></BaseInput>
                            <div class="flexCheckBoxes">
                                <BaseCheckbox v-model="file" id="candidateFile" type="file" class="file"
                                    aria-labelledby="tooltip-label">
                                </BaseCheckbox>
                                <span class="tooltip-text" role="tooltip" id="tooltip-label">Прикрепить резюме не более
                                    5МБ</span>
                                <BaseCheckbox v-model="checked[1]" id="candidate" type="checkbox"></BaseCheckbox>
                            </div>
                            <!--   <div class="g-recaptcha" data-sitekey="6LeA-xgoAAAAAFT0Z268J8hUbytDfvGwbMs3GaJc"
                                data-callback="getRecaptchaToken"></div> -->
                        </div>
                    </form>
                </div>
            </template>
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
import BaseInput from './BaseElements/BaseInput.vue';
import { ref, onMounted } from 'vue'

const step = ref('Шаг 1')
const recommender = ref(true)
const candidate = ref(false)
const checked = ref([false, false])
const file = ref({})
const recommenderName = ref('')
const recommenderEmail = ref('')
const recommenderPhone = ref(null)
const candidateName = ref('')
const candidateEmail = ref('')
const candidatePhone = ref(null)
const userWidth = ref(document.documentElement.clientWidth);
// alert(userWidth.value)
onMounted(() => {
    window.addEventListener("resize", function () {
        userWidth.value = document.documentElement.clientWidth;
    });
});


const sendData = async () => {
    if (recommender) {
        // console.log('recommender')
        step.value = 'Шаг 2'
        candidate.value = true
        recommender.value = false
    } else {

        // console.log('candidate')
    }

    let formData = new FormData()
    formData.append('recommender[NAME]', recommenderName)
    formData.append('recommender[EMAIL]', recommenderEmail)
    formData.append('recommender[PHONE]', recommenderPhone)
    formData.append('candidate[NAME]', candidateName)
    formData.append('candidate[EMAIL]', candidateEmail)
    formData.append('candidate[PHONE]', candidatePhone)
    formData.append('userfile', file.value.blob, file.value.fileName)

    let response = await fetch('/upload/', {
        method: 'POST',
        body: formData
    });

    let result = await response.json();
    console.log('result', result)

}

</script>

<style lang="scss" scoped>
section {
    max-width: 100%;

    @media screen and (min-width: 320px) {
        padding: 0 calc(50% - 155px) 0;
    }

    @media screen and (min-width: 375px) {
        padding: 0 calc(50% - 177px) 0;
    }

    @media screen and (min-width: 390px) {
        padding: 0 calc(50% - 187px) 0;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 calc(50% - 472px) 0;
    }

    @media screen and (min-width: 1920px) {
        padding: 0 calc(50% - 880px) 0;
    }

    .form-section {
        &_title {
            color: #FFF;
            font-size: 30px;
            font-weight: 700;
            line-height: normal;

            @media screen and (min-width: 1024px) {
                font-size: 60px;
            }

            @media screen and (min-width: 1920px) {
                font-size: 100px;
            }
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

            @media screen and (min-width: 1024px) {
                position: relative;
                left: 245px;
            }

            @media screen and (min-width: 1920px) {
                position: relative;
                left: 455px;
            }

        }
    }
}

.firstForm {
    @media screen and (min-width: 1024px) {
        border-radius: 20px 20px 1px 20px !important;
    }
}

.form {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    border-radius: 20px 20px 1px 20px;
    margin-bottom: 32px;
    background: rgba(255, 255, 255, 1);

    @media screen and (min-width: 1024px) {
        width: 456px;
        border-radius: 20px 20px 20px 1px;
        padding: 24px 40px 9px;
    }

    @media screen and (min-width: 1920px) {
        width: 848px;
        height: 564px;
        justify-content: space-between;
    }

    &_recommender,
    &_candidate {
        padding-bottom: 12px;
        color: #111;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;

        @media screen and (min-width: 1024px) {
            text-align: center;
        }

        @media screen and (min-width: 1920px) {
            font-size: 48px;
        }
    }
}

.flexCheckBoxes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.footer {
    color: #A1A1A1;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 1920px) {
        font-size: 24px;
    }
}

.custom-btn {
    font-size: 16px;
    padding: 20px 24px;
    width: 160px;
    margin-bottom: 66px;

    @media screen and (min-width: 1024px) {
        padding: 18px 32px;
        margin-bottom: 73px;
    }

    @media screen and (min-width: 1920px) {
        width: auto;
        font-size: 24px;
        padding: 24px 48px;
        margin-bottom: 96px;
    }
}

.form-container {
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media screen and (min-width: 1024px) {
        padding: 32px 0 0;
    }

    @media screen and (min-width: 1920px) {
        padding: 40px 0 0;
    }
}

.tooltip-text {
    background-color: #0D0D0D;
    color: #FFFFFF;
    font-size: 11px;
    text-transform: none;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    left: 91px;
    top: -48px;
    z-index: 1;
    transform: translateX(-50%);
    display: none;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 30px;
        left: 15px;
        border: 18px solid transparent;
        border-top: 20px solid #0D0D0D;
    }

}

.file:hover+.tooltip-text {
    display: block;
}
</style>