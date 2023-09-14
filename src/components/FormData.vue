<template>
    <section>
        <div class="form-section">
            <h1 class="form-section_title">Заполните формы</h1>
            <p v-if="clientWidth < 1024" class="form-section_step">{{ step }}</p>
            <template v-if="clientWidth < 1024">
                <transition name="modal-fade">
                    <form v-if="recommender" @submit.stop.prevent="stepTwo()">
                        <div class="form">
                            <h3 class="form_recommender">Рекомендатель</h3>
                            <BaseInput v-model="recommenderName" type="text" :error="regExpChecks['recommenderNameError']"
                                label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="recommenderEmail" type="email"
                                :error="regExpChecks['recommenderEmailError']" label="email" text="Email">
                            </BaseInput>
                            <BaseInput v-model="recommenderPhone" type="tel" :error="regExpChecks['recommenderPhoneError']"
                                label="tel" text="Номер телефона">
                            </BaseInput>
                            <BaseCheckbox v-model="checked[0]" type="checkbox"
                                :error="regExpChecks['recommenderAgreedError']" id="recommender">
                            </BaseCheckbox>
                        </div>
                        <div class="form-section_btn">
                            <BaseButton class="custom-btn">Шаг 2</BaseButton>
                        </div>
                    </form>
                </transition>
                <transition name="modal-fade">
                    <form v-if="candidate" @submit.stop.prevent="sendData()">
                        <div class="form">
                            <h3 class="form_candidate">Кандидат</h3>
                            <BaseInput v-model="candidateName" type="text" :error="regExpChecks['candidateNameError']"
                                label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="candidateEmail" type="email" :error="regExpChecks['candidateEmailError']"
                                label="email" text="Email"></BaseInput>
                            <BaseInput v-model="candidatePhone" type="tel" :error="regExpChecks['candidatePhoneError']"
                                label="tel" text="Номер телефона"></BaseInput>
                            <div class="flexCheckBoxes">
                                <BaseCheckbox v-model="file" :error="regExpChecks['candidateFileError']" id="candidateFile"
                                    type="file" class="file"></BaseCheckbox>
                                <span class="tooltip-text">Прикрепить резюме</span>
                                <BaseCheckbox v-model="checked[1]" :error="regExpChecks['candidateAgreedError']"
                                    id="candidate" type="checkbox"></BaseCheckbox>
                            </div>
                        </div>
                        <div class="form-section_btn">
                            <BaseButton class="custom-btn">Отправить</BaseButton>
                        </div>
                    </form>
                </transition>
            </template>
            <template v-if="clientWidth > 1023">
                <div class="form-container">
                    <form @submit.stop.prevent="sendData()">
                        <div class="form firstForm">
                            <h3 class="form_recommender">Рекомендатель</h3>
                            <BaseInput v-model="recommenderName" type="text" :error="regExpChecks['recommenderNameError']"
                                label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="recommenderEmail" type="email"
                                :error="regExpChecks['recommenderEmailError']" label="email" text="Email"></BaseInput>
                            <BaseInput v-model="recommenderPhone" type="tel" :error="regExpChecks['recommenderPhoneError']"
                                label="tel" text="Номер телефона">
                            </BaseInput>
                            <BaseCheckbox v-model="checked[0]" :error="regExpChecks['recommenderAgreedError']"
                                id="recommender" type="checkbox"></BaseCheckbox>
                        </div>
                        <div class="form-section_btn">
                            <BaseButton class="custom-btn">Отправить</BaseButton>
                        </div>
                    </form>
                    <form>
                        <div class="form" ref="candidateForm">
                            <h3 class="form_candidate">Кандидат</h3>
                            <BaseInput v-model="candidateName" type="text" :error="regExpChecks['candidateNameError']"
                                label="text" text="Имя и&nbsp;фамилия">
                            </BaseInput>
                            <BaseInput v-model="candidateEmail" type="email" :error="regExpChecks['candidateEmailError']"
                                label="email" text="Email"></BaseInput>
                            <BaseInput v-model="candidatePhone" type="tel" :error="regExpChecks['candidatePhoneError']"
                                label="tel" text="Номер телефона">
                            </BaseInput>
                            <div class="flexCheckBoxes">
                                <BaseCheckbox v-model="file" :error="regExpChecks['candidateFileError']" id="candidateFile"
                                    type="file" class="file" aria-labelledby="tooltip-label">
                                </BaseCheckbox>
                                <span class="tooltip-text" role="tooltip" id="tooltip-label">Прикрепить резюме не более
                                    5МБ</span>
                                <BaseCheckbox v-model="checked[1]" :error="regExpChecks['candidateAgreedError']"
                                    id="candidate" type="checkbox"></BaseCheckbox>
                            </div>
                            <!--   <div class="g-recaptcha" data-sitekey="6LeA-xgoAAAAAFT0Z268J8hUbytDfvGwbMs3GaJc"
                                data-callback="getRecaptchaToken"></div> -->
                        </div>
                    </form>
                </div>
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
            Юридический дисклеймер о&nbsp;ПСБ Лаб (правила акции, ссылки
            на&nbsp;юридические документы, сноски по&nbsp;тексту)
        </footer>
    </section>
</template>

<script setup>
import BaseButton from './BaseElements/BaseButton.vue';
import BaseCheckbox from './BaseElements/BaseCheckbox.vue';
import BaseInput from './BaseElements/BaseInput.vue';
import { ref, onMounted, unref, watch } from 'vue';

const open = ref(false)
const message = ref('Рекомендация успешно отправлена!')
const step = ref('Шаг 1');
const recommender = ref(true);
const candidate = ref(false);
const checked = ref([false, false]);
const file = ref({});

const candidateForm = ref(null)

const recommenderName = ref('');
const recommenderEmail = ref('');
const recommenderPhone = ref('');

const candidateName = ref('');
const candidateEmail = ref('');
const candidatePhone = ref('');

let regExpChecks = ref({
    recommenderNameError: '',
    recommenderEmailError: '',
    recommenderPhoneError: '',
    recommenderAgreedError: '',
    candidateNameError: '',
    candidateEmailError: '',
    candidatePhoneError: '',
    candidateFileError: '',
    candidateAgreedError: ''
});

const regExp = ref({
    name: /^([а-яё\s]+|[a-z\s]+)$/iu,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
});

const clientWidth = ref(document.documentElement.clientWidth);
onMounted(() => {
    window.addEventListener('resize', function () {
        clientWidth.value = document.documentElement.clientWidth;
    });
});

const stepTwo = () => {

    validateRecommender();

    let statusName = regExpChecks['recommenderNameError'];
    let statusEmail = regExpChecks['recommenderEmailError'];
    let statusPhone = regExpChecks['recommenderPhoneError'];
    let statusAgreed = regExpChecks['recommenderAgreedError'];
    if (
        statusName === '' &&
        statusEmail === '' &&
        statusPhone === '' &&
        statusAgreed === ''
    ) {
        step.value = 'Шаг 2';
        recommender.value = false;
        /* 500ms как для .modal-fade-leave-active */
        setTimeout(() => {
            candidate.value = true;
        }, 500)
    }
};

const closeModal = () => {
    open.value = false;
    step.value = 'Шаг 1'
    candidate.value = false;
    /* 500ms как для .modal-fade-leave-active */
    setTimeout(() => {
        recommender.value = true;
    }, 500)
}

const sendData = async () => {

    if (clientWidth.value < 1024) {
        validateCandidate();
    } else if (clientWidth.value > 1023) {
        validateRecommender();
        validateCandidate();
    }

    let isErrors = false;
    for (let error in regExpChecks) {
        if (!!regExpChecks[error]) {
            isErrors = true
            if (clientWidth.value > 1023 && clientWidth.value < 1920) {
                if (regExpChecks['candidateFileError'] !== '' || regExpChecks['candidateAgreedError'] !== '') {
                    candidateForm.value.style.height = '289px'
                }
            }
            break
        }
    }

    if (isErrors === false) {
        let formData = new FormData();

        formData.append('recommender[NAME]', recommenderName.value);
        formData.append('recommender[EMAIL]', recommenderEmail.value);
        formData.append('recommender[PHONE]', recommenderPhone.value);
        formData.append('candidate[NAME]', candidateName.value);
        formData.append('candidate[EMAIL]', candidateEmail.value);
        formData.append('candidate[PHONE]', candidatePhone.value);
        formData.append('userfile', file.value.file, file.value.fileName);

        let res = await fetch('/upload/', {
            method: 'POST',
            body: formData,
        });

        let response = await res.json();

        if (response.error === true) {
            message.value = response.message
        }
        open.value = true;
    }
};

const validateRecommender = () => {
    regExpChecks = unref(regExpChecks);

    if (regExp.value.name.test(recommenderName.value)) {
        regExpChecks['recommenderNameError'] = '';
    } else {
        regExpChecks['recommenderNameError'] = 'Введите корректное имя';
    }
    if (regExp.value.email.test(recommenderEmail.value)) {
        regExpChecks['recommenderEmailError'] = '';
    } else {
        regExpChecks['recommenderEmailError'] = 'Введите корректный email';
    }
    if (regExp.value.phone.test(recommenderPhone.value)) {
        regExpChecks['recommenderPhoneError'] = '';
    } else {
        regExpChecks['recommenderPhoneError'] = 'Введите корректный телефон';
    }
    if (checked.value[0]) {
        regExpChecks['recommenderAgreedError'] = '';
    } else {
        regExpChecks['recommenderAgreedError'] =
            'Подтвердите согласие на обработку персональных данных';
    }
};

const validateCandidate = () => {
    regExpChecks = unref(regExpChecks);

    if (regExp.value.name.test(candidateName.value)) {
        regExpChecks['candidateNameError'] = '';
    } else {
        regExpChecks['candidateNameError'] = 'Введите корректное имя';
    }
    if (regExp.value.email.test(candidateEmail.value)) {
        regExpChecks['candidateEmailError'] = '';
    } else {
        regExpChecks['candidateEmailError'] = 'Введите корректный email';
    }
    if (regExp.value.phone.test(candidatePhone.value)) {
        regExpChecks['candidatePhoneError'] = '';
    } else {
        regExpChecks['candidatePhoneError'] = 'Введите корректный телефон';
    }
    if (checked.value[1]) {
        regExpChecks['candidateAgreedError'] = '';
    } else {
        regExpChecks['candidateAgreedError'] =
            'Подтвердите согласие на обработку персональных данных';
    } if (file.value.file) {
        regExpChecks['candidateFileError'] = '';
    } else {
        regExpChecks['candidateFileError'] = 'Прикрепите файл';
    }
};

watch(
    () => [recommenderName.value, recommenderEmail.value],
    ([name, email]) => {
        if (regExp.value.name.test(name)) {
            regExpChecks['recommenderNameError'] = '';
        }
        if (regExp.value.email.test(email)) {
            regExpChecks['recommenderEmailError'] = '';
        }
    }
);
watch(
    () => [recommenderPhone.value, checked.value[0]],
    ([phone, agreed]) => {
        if (regExp.value.phone.test(phone)) {
            regExpChecks['recommenderPhoneError'] = '';
        }
        if (agreed) {
            regExpChecks['recommenderAgreedError'] = '';
        }
    }
);

watch(
    () => [file.value.file, checked.value[1]],
    ([file, agreed]) => {
        if (file) {
            regExpChecks['candidateFileError'] = '';
        }
        if (agreed) {
            regExpChecks['candidateAgreedError'] = '';
        }
    }
);

watch(
    () => [candidatePhone.value, candidateEmail.value],
    ([phone, email]) => {
        if (regExp.value.phone.test(phone)) {
            regExpChecks['candidatePhoneError'] = '';
        }
        if (regExp.value.email.test(email)) {
            regExpChecks['candidateEmailError'] = '';
        }
    }
);

watch(
    () => candidateName.value,
    (name) => {
        if (regExp.value.name.test(name)) {
            regExpChecks['candidateNameError'] = '';
        }
    }
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
            }

            @media screen and (min-width: 1920px) {
                font-size: 100px;
            }
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
    top: 4px;
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
    background-color: #0d0d0d;
    color: #ffffff;
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
            width: 325px;
        }

        @media screen and (min-width: 1024px) {
            padding: 48px;
            width: 556px;
            row-gap: 32px;
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
    }

    &-btn {
        color: rgba(13, 13, 13, 1);
        margin: 0 auto;

        @media screen and (min-width: 320px) {
            width: 160px;
            padding: 20px 24px;
        }

        @media screen and (min-width: 1024px) {
            padding: 24px 48px;
            gap: 10px;
            border-radius: 57px;
            width: 274px;
            height: 76px;
            font-size: 24px;
        }

        &:before {
            background: #fff;
        }
    }
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
