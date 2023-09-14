<template>
    <div v-bind="$attrs">
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
input[type='checkbox'] {
    position: absolute;
    z-index: -10;
    opacity: 0;
}

input[type='file'] {
    position: absolute;
    z-index: -1;
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
    cursor: pointer;
    margin-right: 12px;
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
        font-size: 8px;
    }

    @media screen and (min-width: 375px) {
        font-size: 10px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 12px;
    }

    @media screen and (min-width: 1920px) {
        font-size: 18px;
        padding-bottom: 24px;
        align-items: center;
    }
}

input[type='file']~.fileLabel:before {
    background-image: url('/src/assets/img/pinblack.png');
    position: relative;
    top: 2px;
    left: 1px;

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
    top: 42px;
    left: 0;
    color: rgb(6, 21, 5);

    @media screen and (min-width: 1920px) {
        top: 66px;
    }
}

.error {
    position: relative;
    top: 3px;
    left: 4px;
    color: rgb(255, 56, 25);
    font-size: 10px;

    @media screen and (min-width: 1920px) {
        position: relative;
        top: -15px;
        left: 4px;
        color: rgb(255, 56, 25);
        font-size: 22px;
    }
}

.errorCandidateFile {
    position: absolute;
    left: 7px;
    bottom: -11px;
    font-size: 9px;
    color: rgba(255, 56, 25, 1);

    @media screen and (min-width: 1920px) {
        position: absolute;
        left: -32px;
        bottom: -1px;
        font-size: 20px;
        color: rgb(255, 56, 25);
    }

}

.errorCandidate {
    position: absolute;
    bottom: -11px;
    font-size: 9px;
    left: 101px;
    color: rgba(255, 56, 25, 1);

    @media screen and (min-width: 1920px) {
        position: absolute;
        bottom: 13px;
        font-size: 21px;
        left: 147px;
        color: rgb(255, 56, 25);
    }
}
</style>
