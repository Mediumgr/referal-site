<template>
    <section>
        <div class="form-section">
            <h1 class="form-section_title">Заполните формы</h1>
            <p class="form-section_step" v-if="clientWidth < 1024">{{ step }}</p>
            <template class="form-section-flex">
                <transition name="form-fade">
                    <form v-if="recommender" @submit.stop.prevent="stepTwo()" class="form_recommender">
                        <div class="form firstForm">
                            <h3 class="form_recommender_title">Рекомендатель</h3>
                            <BaseInput v-model="recommenderName" type="text" :error="regExpChecks['recommenderName']"
                                label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="recommenderEmail" type="email" :error="regExpChecks['recommenderEmail']"
                                label="email" text="Email">
                            </BaseInput>
                            <BaseInput v-model="recommenderPhone" type="tel" :error="regExpChecks['recommenderPhone']"
                                label="tel" text="Номер телефона">
                            </BaseInput>
                            <BaseCheckbox v-model="checked[0]" :error="regExpChecks['recommenderParticipation']"
                                type="checkbox" id="participation">
                                Я&nbsp;даю согласие на&nbsp;участие в&nbsp;Программе &#171;Приведи друга
                                в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ Лаб&#187;, с&nbsp;условиями
                                <a href="/docs/rules.docx" target="_blank" download>Программы</a> ознакомлен
                            </BaseCheckbox>
                            <BaseCheckbox v-model="checked[1]" :error="regExpChecks['recommenderProcessing']"
                                type="checkbox" id="processing">
                                Я&nbsp;даю свое согласие на&nbsp;обработку своих персональных данных ООО &#171;ПСБ Лаб&#187;
                                в&nbsp;ПАО &#171;Промсвязьбанк&#187;. С&nbsp;&#171;<a href="/docs/confirm_recomend.docx"
                                    target="_blank" download>Согласием</a>
                                на&nbsp;обработку персональных данных Рекомендателя Программы &#171;Приведи друга
                                в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ Лаб&#187;
                                ознакомлен
                            </BaseCheckbox>
                            <BaseCheckbox v-model="checked[2]" :error="regExpChecks['recommenderSigning']" type="checkbox"
                                id="signing">
                                Я&nbsp;даю согласие на&nbsp;подписание договора об&nbsp;оказании услуг для выплаты
                                вознаграждения простой электронной подписью и&nbsp;предоставление данных для его заключения,
                                если рекомендованный мною Кандидат будет принят на&nbsp;работу и&nbsp;успешно пройдет
                                испытательный срок в&nbsp;ООО &#171;ПСБ Лаб&#187;
                            </BaseCheckbox>
                        </div>
                        <div v-if="clientWidth < 1024" class="form-section_btn">
                            <BaseButton class="custom-btn">Шаг 2</BaseButton>
                        </div>
                    </form>
                </transition>
                <transition name="form-fade">
                    <form v-if="candidate" @submit.stop.prevent="sendData()" class="form_candidate">
                        <div class="form secondForm">
                            <h3 class="form_candidate_title">Кандидат</h3>
                            <BaseInput v-model="candidateName" type="text" :error="regExpChecks['candidateName']"
                                label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="candidateEmail" type="email" :error="regExpChecks['candidateEmail']"
                                label="email" text="Email"></BaseInput>
                            <BaseInput v-model="candidatePhone" type="tel" :error="regExpChecks['candidatePhone']"
                                label="tel" text="Номер телефона"></BaseInput>
                            <BaseCheckbox v-model="checked[3]" :error="regExpChecks['candidateParticipation']"
                                type="checkbox" id="candidateParticipation">
                                Я&nbsp;даю согласие на&nbsp;участие в&nbsp;Программе &#171;Приведи друга
                                в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ Лаб&#187;, с&nbsp;условиями <a href="/docs/rules.docx"
                                    target="_blank" download>Программы</a> ознакомлен
                            </BaseCheckbox>
                            <BaseCheckbox v-model="checked[4]" :error="regExpChecks['candidateProcessing']" type="checkbox"
                                id="candidateProcessing">
                                Я&nbsp;даю свое согласие на&nbsp;обработку своих персональных данных ООО &#171;ПСБ
                                Лаб&#187; в&nbsp;ПАО &#171;Промсвязьбанк&#187;. С&nbsp;&#171;<a
                                    href="/docs/confirm_candidate.docx" target="_blank" download>Согласием</a>
                                на&nbsp;обработку персональных данных Кандидата Программы &#171;Приведи друга
                                в&nbsp;ИТ&#187;&nbsp;ООО &#171;ПСБ Лаб&#187; ознакомлен
                            </BaseCheckbox>
                            <BaseCheckbox v-model="file" :error="regExpChecks['candidateFile']" id="candidateFile"
                                type="file" class="file"></BaseCheckbox>
                            <span class="tooltip-text">Прикрепить резюме не более 5МБ</span>
                        </div>
                        <!-- <div class="g-recaptcha" data-sitekey="6LeA-xgoAAAAAFT0Z268J8hUbytDfvGwbMs3GaJc"
                                data-callback="getRecaptchaToken">
                            </div> -->
                        <div class="form-section_btn">
                            <BaseButton class="custom-btn" v-if="!loader">Отправить</BaseButton>
                            <span class="loader" v-if="loader"></span>
                        </div>
                    </form>
                </transition>
            </template>
        </div>
        <Teleport to="body">
            <transition name="modal-fade">
                <div class="modal" v-if="open">
                    <div class="modal-pop-up">
                        <p class="modal-text">{{ message }}</p>
                        <BaseButton type="button" class="custom-btn modal-btn" @click.stop="closeModal()">
                            Хорошо
                        </BaseButton>
                    </div>
                </div>
            </transition>
        </Teleport>
        <footer class="footer">
            Юридический дисклеймер: <a href="/docs/rules.docx" class="link" target="_blank" download>Правила программы</a>,
            <a href="/docs/confirm_recomend.docx" class="link" target="_blank" download>Согласие</a> на&nbsp;обработку
            персональных
            данных Рекомендателя, <a href="/docs/confirm_candidate.docx" class="link" target="_blank" download>Согласие</a>
            на&nbsp;обработку персональных данных Кандидата.
        </footer>
    </section>
</template>

<script setup>
import BaseButton from "./BaseElements/BaseButton.vue";
import BaseCheckbox from "./BaseElements/BaseCheckbox.vue";
import BaseInput from "./BaseElements/BaseInput.vue";
import { ref, onMounted, watch } from "vue";
import { useSubmit } from "./composables/useSubmit";
import { useWatchers } from "./composables/useWatchers";
import { useStepTwo } from "./composables/useStepTwo";

const open = ref(false);
const loader = ref(false);
const message = ref("Рекомендация успешно отправлена!");
const step = ref("Шаг 1");
const recommender = ref(true);
const candidate = ref(false);
const checked = ref([false, false, false, false, false]);
const file = ref({});
const recommenderName = ref("");
const recommenderEmail = ref("");
const recommenderPhone = ref("");
const candidateName = ref("");
const candidateEmail = ref("");
const candidatePhone = ref("");
let regExpChecks = ref({});
const regExp = ref({
    name: /^([а-яё\s]+|[a-z\s]+)$/iu,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
});

const clientWidth = ref(document.documentElement.clientWidth);
onMounted(() => {
    window.addEventListener("resize", function () {
        clientWidth.value = document.documentElement.clientWidth;
    });
});

const closeModal = () => {
    open.value = false;
    step.value = "Шаг 1";
    if (clientWidth.value < 1024) {
        candidate.value = false;
    }
    /* 500ms как для класса .form-fade-leave-active */
    setTimeout(() => {
        recommender.value = true;
    }, 500);
};

let optionsValidations = {
    regExpChecks,
    regExp,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    step,
    recommender,
    candidate
};
const stepTwo = () => useStepTwo(optionsValidations);

let optionsSubmit = {
    clientWidth,
    regExpChecks,
    open,
    loader,
    regExp,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
};
const sendData = async () => await useSubmit(optionsSubmit);

let watchOptions = {
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
    regExpChecks,
    regExp,
};
useWatchers(watchOptions);

watch(
    () => clientWidth.value,
    (clientWidth) => {
        if (clientWidth > 1023) {
            candidate.value = true;
            recommender.value = true;
        } else {
            candidate.value = false;
            recommender.value = true;
            step.value = "Шаг 1";
        }
    },
    { immediate: true }
);
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
            color: #fff;
            font-size: 30px;
            font-weight: 700;
            line-height: normal;

            @media screen and (min-width: 1024px) {
                font-size: 60px;
                padding-bottom: 32px;
            }

            @media screen and (min-width: 1920px) {
                font-size: 100px;
            }
        }

        &-flex {
            display: flex;
            justify-content: space-between;
            align-items: self-start;
        }

        &_step {
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            line-height: normal;
            padding: 12px 0;
        }

        &_btn {
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen and (min-width: 320px) {
                margin-bottom: 66px;
            }

            @media screen and (min-width: 1024px) {
                position: relative;
                right: 245px;
                margin-bottom: 75px;
            }

            @media screen and (min-width: 1920px) {
                right: 455px;
            }
        }
    }
}

.firstForm {
    @media screen and (min-width: 320px) {
        border-radius: 20px 20px 1px 20px !important;
    }

    @media screen and (min-width: 1024px) {
        border-radius: 40px 40px 1px 40px !important;
    }

    @media screen and (min-width: 1920px) {
        border-radius: 100px 100px 1px 100px !important;
    }
}

.secondForm {

    @media screen and (min-width: 1024px) {
        padding: 25px 40px 61px 40px !important;
    }

    @media screen and (min-width: 1920px) {
        padding: 25px 40px 66px 40px !important;
    }
}

.form {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    border-radius: 20px 20px 1px 20px;
    margin-bottom: 32px;
    background: rgba(255, 255, 255, 1);

    @media screen and (min-width: 320px) {
        border-radius: 20px 20px 20px 1px;
    }

    @media screen and (min-width: 1024px) {
        width: 456px;
        border-radius: 40px 40px 40px 1px;
        padding: 25px 40px;
        margin-bottom: 70px;
    }

    @media screen and (min-width: 1920px) {
        width: 848px;
        justify-content: space-between;
        border-radius: 100px 100px 100px 1px;
    }

    &_recommender_title,
    &_candidate_title {
        padding-bottom: 12px;
        color: #111;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;

        @media screen and (min-width: 1024px) {
            text-align: center;
            padding-bottom: 24px;
        }

        @media screen and (min-width: 1920px) {
            font-size: 48px;
        }
    }
}

.link {
    color: #a1a1a1;
}

.footer {
    color: #a1a1a1;
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

    @media screen and (min-width: 1024px) {
        padding: 24px 48px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 24px;
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
    background-color: #0d0d0d;
    color: #ffffff;
    font-size: 11px;
    text-transform: none;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    left: 90px;
    top: -37px;
    z-index: 1;
    transform: translateX(-50%);
    display: none;

    @media screen and (min-width: 1920px) {
        top: -42px;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 27px;
        left: 15px;
        border: 18px solid transparent;
        border-top: 20px solid #0d0d0d;
    }
}

.file:hover+.tooltip-text {
    display: block;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.32);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &-pop-up {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
        border-radius: 20px;
        background: #FFF;
        box-sizing: content-box;
        padding: 15px;
        width: 280px;

        @media screen and (min-width: 375px) {
            width: 325px;
        }

        @media screen and (min-width: 390px) {
            padding: 24px;
            row-gap: 24px;
        }

        @media screen and (min-width: 1024px) {
            padding: 48px;
            width: 556px;
            row-gap: 32px;
        }

        @media screen and (min-width: 1920px) {
            width: 635px;
        }
    }

    &-text {
        color: #1B232F;
        font-weight: 400;
        line-height: normal;

        @media screen and (min-width: 390px) {
            font-size: 18px;
        }

        @media screen and (min-width: 1024px) {
            color: #0D0D0D;
            font-size: 24px;
            font-weight: 500;
            text-transform: uppercase;
        }

        @media screen and (min-width: 1920px) {
            font-size: 32px;
            font-weight: 400;
        }
    }

    &-btn {
        color: rgba(13, 13, 13, 1);
        margin: 0 auto;

        &::before {
            background: #fff;
        }

        &:hover {
            color: #fff;
            transition: 500ms ease-out;
        }
    }
}


.loader {
    width: 48px;
    height: 48px;
    border: 3px solid #7f40ff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 3px solid;
    color: red;
    border-color: #ff5940 transparent;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}


.form-fade-enter-from,
.form-fade-leave-to {
    opacity: 0;
}

.form-fade-enter-active,
.form-fade-leave-active {
    transition: opacity 0.5s ease-out;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease-out;
}
</style>
