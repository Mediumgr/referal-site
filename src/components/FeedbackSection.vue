<template>
    <div class="feedback">
        <h1 class="feedback-header">Сомневаетесь, работает ли программа?</h1>
        <h4 class="feedback-title">Посмотрите отзывы сотрудников о такой же программе внутри банка</h4>
        <div class="feedback-wrapper">
            <div class="feedback-person">
                <img src="../assets/img/personone.png" alt="person">
                <h3 class="feedback-name">Екатерина Кармацкая</h3>
                <p class="feedback-text">
                    ПСБ мне рекомендовала коллега с&nbsp;предыдущего места работы. В&nbsp;итоге я&nbsp;устроилась
                    по&nbsp;программе &laquo;Приведи в&nbsp;ИТ&raquo;, прошла испытательный срок и&nbsp;продолжаю работать
                    в&nbsp;банке. Я&nbsp;рада работать в&nbsp;команде проверенных и&nbsp;надежных людей.
                </p>
            </div>
            <div class="feedback-person">
                <img src="../assets/img/persontwo.png" alt="person">
                <h3 class="feedback-name">Владимир Воротников</h3>
                <p class="feedback-text">Я&nbsp;порекомендовал знакомого с&nbsp;прошлой работы по&nbsp;программе
                    &laquo;Приведи в&nbsp;ИТ&raquo;. Он&nbsp;уже прошел испытательный срок и&nbsp;продолжает работать
                    в&nbsp;банке. Выплату по&nbsp;программе получил.
                </p>
            </div>
            <div class="feedback-person">
                <img src="../assets/img/personthree.png" alt="person">
                <h3 class="feedback-name">Елизавета Воробьева</h3>
                <p class="feedback-text">Я&nbsp;участвовала в&nbsp;программе &laquo;Приведи в&nbsp;ИТ&raquo; в&nbsp;качестве
                    человека, кого привели. Это здорово, что коллеги могут привести компетентных сотрудников, которые
                    помогут усилить команду банка. Мне нравится работать в&nbsp;команде банка, здесь у&nbsp;каждого
                    амбициозные цели, мы&nbsp;заряжаем друг друга.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
/* import { ref, onMounted } from "vue";

const userWidth = ref(null);

onMounted(() => {
    userWidth.value = document.documentElement.clientWidth;
    window.addEventListener("resize", function () {
        userWidth.value = document.documentElement.clientWidth;
    });
}); */
</script>

<style lang="scss" scoped>
.feedback {
    @media screen and (min-width: 320px) {
        padding: 0 calc(50% - 155px) 40px;
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
        padding: 0 calc(50% - 880px) 112px;
    }

    &-header {
        color: #FFF;
        font-weight: 700;
        line-height: normal;

        @media screen and (min-width: 320px) {
            font-size: 22px;
            margin-bottom: 12px;
        }

        @media screen and (min-width: 375px) {
            font-size: 24px;
        }

        @media screen and (min-width: 1024px) {
            font-size: 60px;
            margin-bottom: 40px;
        }

        @media screen and (min-width: 1920px) {
            font-size: 100px;
        }
    }

    &-title {
        color: #FFF;
        font-weight: 400;
        line-height: normal;

        @media screen and (min-width: 320px) {
            font-size: 16px;
            margin-bottom: 22px;
        }

        @media screen and (min-width: 375px) {
            font-size: 18px;
            margin-bottom: 24px;
        }

        @media screen and (min-width: 1024px) {
            font-size: 32px;
            margin-bottom: 40px;
        }

        @media screen and (min-width: 1920px) {
            font-size: 48px;
            margin-bottom: 80px;
        }
    }

    &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: 320px) {
            grid-gap: 10px;
            align-items: start;
        }

        @media screen and (min-width: 375px) {}

        @media screen and (min-width: 390px) {
            grid-gap: 24px;
        }
    }

    &-person {
        display: flex;
        flex-direction: column;
        background: #FFF;

        >img {
            border-radius: 40px 40px 0 0;

            @media screen and (min-width: 320px) {
                border-radius: 20px 20px 0 0;
            }
        }

        @media screen and (min-width: 320px) {
            border-radius: 20px;
            width: 290px;
            min-height: 555px;
        }

        @media screen and (min-width: 390px) {
            width: 298px;
            min-height: 630px;

        }

        @media screen and (min-width: 1920px) {
            width: 576px;
            min-height: 865px;
            border-radius: 40px;
        }
    }

    &-name {
        font-weight: 600;
        line-height: normal;

        @media screen and (min-width: 320px) {
            font-size: 16px;
            padding: 10px 14px;
        }

        @media screen and (min-width: 375px) {
            font-size: 18px;
            padding: 12px 14px;
        }

        @media screen and (min-width: 390px) {
            font-size: 20px;
  padding: 12px 29px;
        }

        @media screen and (min-width: 1920px) {
            font-size: 24px;
            padding: 24px 24px 16px 24px;
        }
    }

    &-text {
        font-weight: 400;
        line-height: normal;

        @media screen and (min-width: 320px) {
            font-size: 16px;
            padding: 0 14px 10px 14px;
        }

        @media screen and (min-width: 390px) {
            font-size: 18px;
               padding: 0 29px 5px 29px;
        }

        @media screen and (min-width: 1920px) {
            font-size: 24px;
            padding: 0 24px 0 24px;
        }
    }
}
</style>