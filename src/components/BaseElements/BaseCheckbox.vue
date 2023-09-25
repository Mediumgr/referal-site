<template>
    <div class="checkbox-container">
        <input :id="id" :type="type" :checked="modelValue" @change="change($event)" />
        <label v-if="type === 'file'" for="candidateFile" class="fileLabel">Резюме</label>
        <span v-if="type === 'file'" class="fileName">{{ fileName }}</span>
        <label :for="id" v-if="type === 'checkbox'" class="checkboxLabel">
            <label :for="id">
                <slot></slot>
            </label>
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
        fileName.value = 'файл загружен'
        const file = event.target.files[0];
        emit('update:modelValue', { file });
    }
}

const errorClass = computed(() => {
    if (props.id === 'participation' || props.id === 'processing' || props.id === 'signing') {
        return 'error'
    }
    if (props.id === 'candidateParticipation' || props.id === 'candidateProcessing') {
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
    top: 30px;
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
    margin-top: 2px;
    margin-left: 2px;

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
    align-items: start;
    color: #1B232F;
    font-family: 'Inter';
    font-size: 9px;
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
        padding-bottom: 14px;
    }
}

.fileLabel {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-top: 11px;

    @media screen and (min-width: 1920px) {
        padding-top: 0;
        font-size: 19px;
        padding-bottom: 10px;
    }
}

input[type='file']~.fileLabel:before {
    background-image: url('/src/assets/img/pinblack.png');
    position: relative;
    top: 0;
    left: 0;

    @media screen and (min-width: 1920px) {
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

.fileName {
    font-size: 10px;
    color: rgb(6, 21, 5);
    white-space: nowrap;
    color: green;

    @media screen and (min-width: 1920px) {
        font-size: 22px;
    }
}

.error {
    color: rgb(255, 56, 25);
    font-size: 10px;

    @media screen and (min-width: 1920px) {
        font-size: 22px;
    }
}

.errorCandidateFile {
    color: rgba(255, 56, 25, 1);
    font-size: 10px;

    @media screen and (min-width: 1920px) {
        font-size: 22px;
    }

}

.errorCandidate {
    color: rgba(255, 56, 25, 1);
    font-size: 10px;

    @media screen and (min-width: 1920px) {
        font-size: 22px;
    }
}
</style>
