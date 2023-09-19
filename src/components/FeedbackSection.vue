<template>
    <div class="feedback" ref="feedback">
        <h1 class="feedback-header">Сомневаетесь, работает ли программа?</h1>
        <h4 class="feedback-title">
            Посмотрите отзывы сотрудников о такой же программе внутри банка
        </h4>
        <swiper-container init="false" ref="swiper">
            <swiper-slide>
                <div class="feedback-person">
                    <div class="feedback-person">
                        <img src="../assets/img/personone.png" alt="person" />
                        <h3 class="feedback-name">Екатерина Кармацкая</h3>
                        <p class="feedback-text">
                            ПСБ мне рекомендовала коллега с&nbsp;предыдущего места работы.
                            В&nbsp;итоге я&nbsp;устроилась по&nbsp;программе &quot;Приведи
                            в&nbsp;ИТ&quot;, прошла испытательный срок и&nbsp;продолжаю работать
                            в&nbsp;банке. Я&nbsp;рада работать в&nbsp;команде проверенных
                            и&nbsp;надежных людей.
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="feedback-person">
                    <img src="../assets/img/persontwo.png" alt="person" />
                    <h3 class="feedback-name">Владимир Воротников</h3>
                    <p class="feedback-text">
                        Я&nbsp;порекомендовал знакомого с&nbsp;прошлой работы
                        по&nbsp;программе &quot;Приведи в&nbsp;ИТ&quot;. Он&nbsp;уже прошел
                        испытательный срок и&nbsp;продолжает работать в&nbsp;банке. Выплату
                        по&nbsp;программе получил.
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="feedback-person">
                    <img src="../assets/img/personthree.png" alt="person" />
                    <h3 class="feedback-name">Елизавета Воробьева</h3>
                    <p class="feedback-text">
                        Я&nbsp;участвовала в&nbsp;программе &quot;Приведи в&nbsp;ИТ&quot;
                        в&nbsp;качестве человека, кого привели. Это здорово, что коллеги могут
                        привести компетентных сотрудников, которые помогут усилить команду
                        банка. Мне нравится работать в&nbsp;команде банка, здесь
                        у&nbsp;каждого амбициозные цели, мы&nbsp;заряжаем друг друга.
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="feedback-person">
                    <img src="../assets/img/personfour.png" alt="person" />
                    <h3 class="feedback-name">Дмитрий Стафеев</h3>
                    <p class="feedback-text">
                        Я&nbsp;порекомендовал двоих своих знакомых в&nbsp;ПСБ. Мне нравится, что в&nbsp;можно так приводить
                        в&nbsp;команду классных экспертов. Ребята работают с&nbsp;мая 2023&nbsp;г. Выплаты получил
                        в&nbsp;указанные сроки.
                    </p>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();
import { onMounted, ref, unref } from 'vue';

let swiper = ref(null)

onMounted(() => {
    window.addEventListener("resize", function () {
        const clientWidth = document.documentElement.clientWidth;
        if (clientWidth < 1024) {
            for (let i = 0; i < swiper?.children?.length; i++) {
                swiper?.children[i]?.classList.add('resized')
            }
        } else {
            for (let i = 0; i < swiper?.children?.length; i++) {
                swiper?.children[i]?.classList.remove('resized')
            }
        }
    });

    swiper = unref(swiper)

    const swiperParams = {
        slidesPerView: 'auto',
        breakpoints: {
            320: {
                spaceBetween: "5",
            },
            375: {
                spaceBetween: "24",
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: "16",
            },
        },
    };

    Object.assign(swiper, swiperParams);
    swiper.initialize();
})
</script>

<style lang="scss" scoped>
swiper-slide {
    border-radius: 20px;

    @media screen and (min-width: 320px) {
        width: 94%;
    }

    @media screen and (min-width: 375px) {
        width: 80%;
    }
}

.resized {
    @media screen and (min-width: 320px) {
        width: 94% !important;
    }

    @media screen and (min-width: 375px) {
        width: 80% !important;
    }
}

.feedback {
    max-width: 100%;

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
}

.feedback-title {
    color: #fff;
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

.feedback-person {
    display: flex;
    flex-direction: column;
    background: #fff;

    >img {
        border-radius: 40px 40px 0 0;

        @media screen and (min-width: 320px) {
            border-radius: 20px 20px 0 0;
            height: 291px;
        }

        @media screen and (min-width: 1024px) {
            height: auto;
        }
    }

    @media screen and (min-width: 320px) {
        border-radius: 20px;
        height: 575px;
    }

    @media screen and (min-width: 390px) {
        height: 643px;
    }

    @media screen and (min-width: 425px) {
        height: 652px;
    }

    @media screen and (min-width: 1024px) {
        height: 520px;
    }

    @media screen and (min-width: 1920px) {
        height: 865px;
        border-radius: 40px;
    }
}

.feedback-name {
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

    @media screen and (min-width: 1024px) {
        padding: 12px 14px;
        font-size: 18px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 24px;
        padding: 24px 24px 16px 24px;
    }
}

.feedback-header {
    color: #fff;
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

.feedback-text {
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

    @media screen and (min-width: 1024px) {
        font-size: 15px;
        padding: 0 14px 5px 14px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 24px;
        padding: 0 24px 0 24px;
    }
}
</style>
