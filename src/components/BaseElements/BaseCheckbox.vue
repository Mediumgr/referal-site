<template>
    <div class="checkbox-container">
        <input :id="id" :type="type" :checked="modelValue" @change="change($event)" />
        <label v-if="type === 'file'" for="candidateFile" class="fileLabel"></label>
        <span class="fileName">{{ fileName }}</span>
        <label :for="id" v-if="type === 'checkbox'" class="checkboxLabel">
            Я&nbsp;даю согласие на&nbsp;обработку моих персональных данных
            и&nbsp;передачу их&nbsp;в&nbsp;ПАО &laquo;Промсвязьбанк&raquo; для участия
            в&nbsp;программе &quot;Приведи друга в&nbsp;ПСБ Лаб&quot;.
        </label>
        <span :class="errorClass" v-if="error">{{ error }}</span>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: [Boolean, Object],
        default: false,
    },
    type: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: false,
    },
});
const fileName = ref('')

const change = async (event) => {
    if (props.type === 'checkbox') {
        emit('update:modelValue', event.target.checked);
    } else {
        const file = event.target.files[0];
        if (!file) return;
        fileName.value = file.name.split('\\').pop()
        emit('update:modelValue', { fileName, file });
    }
}

const errorClass = computed(() => {
    if (props.id === 'recommender') {
        return 'error'
    }
    if (props.id === 'candidate') {
        return 'errorCandidate'
    }
    if (props.id === 'candidateFile') {
        return 'errorCandidateFile'
    }
})

</script>

<style lang="scss" scoped>
.checkbox-container {
    position: relative;
}

input[type='checkbox'],
input[type='file'] {
    position: absolute;
    z-index: -10;
    opacity: 0;
}

input[type='checkbox']~.checkboxLabel::before,
input[type='file']~.fileLabel::before {
    content: " ";
    width: 40px;
    height: 40px;
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
    margin-right: 12px;
    cursor: pointer;
    background: #fff;
    outline: 2px solid rgba(17, 17, 17, 1);
    background-repeat: no-repeat;
    background-position: center center;

    @media screen and (min-width: 1920px) {
        width: 60px;
        height: 60px;
    }
}

input[type='checkbox']:checked~.checkboxLabel::before {
    background-image: url('/src/assets/img/checked.png');

    @media screen and (min-width: 1920px) {
        background-image: url('/src/assets/img/checkedBig.png');
    }
}

.checkboxLabel {
    display: flex;
    color: #1B232F;
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 500;
    line-height: 1.3;

    @media screen and (min-width: 320px) {
        padding-top: 14px;
    }

    @media screen and (min-width: 375px) {
        font-size: 10px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 12px;
        padding-top: 11px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 19px;
        padding-top: 0;
        padding-bottom: 24px;
        align-items: center;
    }
}

label[for="candidate"] {
    padding-top: 0;
}

input[type='file']~.fileLabel:before {
    background-image: url('/src/assets/img/pinblack.png');
    position: relative;
    top: -4px;
    left: 1px;

    @media screen and (min-width: 375px) {
        top: 2px;
    }

    @media screen and (min-width: 1024px) {
        top: -1px;
    }

    @media screen and (min-width: 1920px) {
        top: -10px;
        background-image: url('/src/assets/img/pinblackBig.png');
    }
}

input[type='file']:hover~.fileLabel:before {
    z-index: 2;
    background-image: url('/src/assets/img/pincolor.png');

    transition: .5s background-image;
    -webkit-transition: .5s background-image;
    -moz-transition: .5s background-image;

    @media screen and (min-width: 1920px) {
        background-image: url('/src/assets/img/pincolorBig.png');
    }
}

.fileLabel {
    @media screen and (min-width: 1920px) {
        padding-bottom: 24px;
    }
}

.fileName {
    position: absolute;
    font-size: 11px;
    top: 45px;
    left: 0;
    color: rgb(6, 21, 5);

    @media screen and (min-width: 320px) {
        font-size: 11px;
        top: 40px;
        left: 6px;
    }

    @media screen and (min-width: 375px) {
        top: 42px;
    }

    @media screen and (min-width: 1920px) {
        top: 56px;
        font-size: 17px;
    }
}

.error {
    position: absolute;
    top: 3px;
    left: 4px;
    color: rgb(255, 56, 25);
    font-size: 10px;

    @media screen and (min-width: 320px) {
        top: 55px;
    }

    @media screen and (min-width: 375px) {
        left: 51px;
    }

    @media screen and (min-width: 1024px) {
        top: 60px;
    }

    @media screen and (min-width: 1920px) {
        top: 65px;
        left: 70px;
        font-size: 22px;
    }
}

.errorCandidateFile {
    position: absolute;
    left: 2px;
    bottom: -6px;
    font-size: 8px;
    width: 70px;
    color: rgba(255, 56, 25, 1);

    @media screen and (min-width: 375px) {
        left: 5px;
        bottom: -9px;
    }

    @media screen and (min-width: 1024px) {
        width: 100px;
        left: 0;
        bottom: -10px;
        font-size: 10px;
    }

    @media screen and (min-width: 1920px) {
        width: 143px;
        left: 0;
        bottom: -11px;
        font-size: 17px;
    }

}

.errorCandidate {
    position: absolute;
    bottom: -8px;
    font-size: 7px;
    left: 34px;
    color: rgba(255, 56, 25, 1);

    @media screen and (min-width: 375px) {
        bottom: -11px;
        font-size: 8px;
        left: 46px;
    }

    @media screen and (min-width: 390px) {
        bottom: -12px;
        font-size: 9px;
    }

    @media screen and (min-width: 1024px) {
        left: 52px;
        bottom: -21px;
        font-size: 10px;
    }

    @media screen and (min-width: 1920px) {
        bottom: 3px;
        font-size: 20px;
        left: 83px;
    }
}
</style>
