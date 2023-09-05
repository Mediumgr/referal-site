<template>
    <div class="feedback">
        <h1 class="feedback-header">Сомневаетесь, работает ли программа?</h1>
        <h4 class="feedback-title">Посмотрите отзывы сотрудников о такой же программе внутри банка</h4>
        <div class="feedback-wrapper">
            <div class="feedback-person">
                <img src="../assets/img/personone.png" alt="person">
                <h3 class="feedback-name">Екатерина Кармацкая</h3>
                <p class="feedback-text">ПСБ мне рекомендовала коллега с предыдущего места работы. В итоге я устроилась по
                    программе "Приведи в ИТ", прошла испытательный срок и продолжаю работать в банке. Я рада работать в
                    команде проверенных и надежных людей.
                </p>
            </div>
            <div class="feedback-person">
                <img src="../assets/img/persontwo.png" alt="person">
                <h3 class="feedback-name">Владимир Воротников</h3>
                <p class="feedback-text">Я порекомендовал знакомого с прошлой работы по программе "Приведи в ИТ". Он уже
                    прошел испытательный срок и продолжает работать в банке. Выплату по программе получил.
                </p>
            </div>
            <div class="feedback-person">
                <img src="../assets/img/personthree.png" alt="person">
                <h3 class="feedback-name">Елизавета Воробьева</h3>
                <p class="feedback-text">Я участвовала в программе "Приведи в ИТ" в качестве человека, кого привели. Это
                    здорово, что коллеги могут привести компетентных сотрудников, которые помогут усилить команду банка. Мне
                    нравится работать в команде банка, здесь у каждого амбициозные цели, мы заряжаем друг друга.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.feedback {
    padding: 0 calc(50% - 880px) 112px;

    &-header {
        color: #FFF;
        font-size: 100px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 40px;
    }

    &-title {
        color: #FFF;
        font-size: 48px;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 80px;
    }

    &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-person {
        display: flex;
        flex-direction: column;
        width: 576px;
        height: 865px;
        background: #FFF;
        border-radius: 40px;

        >img {
            border-radius: 40px 40px 0 0;
        }
    }

    &-name {
        font-size: 24px;
        font-weight: 600;
        line-height: normal;
        padding: 24px 24px 16px 24px;
    }

    &-text {
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
        padding: 0 24px;
    }
}</style>