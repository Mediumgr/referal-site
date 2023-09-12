<template>
    <div class="input-section">
        <input :class="['input', error ? 'errorBorder' : '']" :id="label" :type="type" :value="modelValue" v-bind="{
            ...$attrs,
            onInput: ($event) => {
                $emit('update:modelValue', $event.target.value)
            }
        }">
        <label :for="label" :class="['label', modelValue !== '' ? 'holdLabel' : '']">{{ text }}</label>
        <span class="errorText" v-if="error">{{ error }}</span>
    </div>
</template>

<script setup>

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    error: {
        type: String,
        required: false,
    },
});

</script>


<style lang="scss" scoped>
.input-section {
    position: relative;
    padding: 14px 14px 14px 0;
    height: 52px;

    @media screen and (min-width: 1920px) {
        padding: 20px 20px 30px 0;
    }

}

.input {
    outline: none;
    border: none;
    background-color: inherit;
    outline-offset: 0;
    border-radius: 0;
    -webkit-border-radius: 0;
    border-bottom: 2px solid black;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 1920px) {
        height: 52px;
        font-size: 32px;
        box-sizing: content-box;
    }

    &:focus+label {
        transform: translateY(-20px);
        font-size: 12px;

        @media screen and (min-width: 1024px) {
            font-size: 16px;
        }


    }
}

.label {
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    position: absolute;
    left: 0;
    transition: 0.3s;
    pointer-events: none;

    @media screen and (min-width: 1920px) {
        font-size: 32px;
        top: 30px;
    }

}

.holdLabel {
    transform: translateY(-20px);

    @media screen and (min-width: 1920px) {
        transform: translateY(-45px);
    }
}

.errorText {
    display: flex;
    justify-content: end;
    color: rgba(255, 56, 25, 1);

    @media screen and (min-width: 1920px) {
        font-size: 24px;
    }
}

.errorBorder {
    border-bottom: 2px solid rgba(255, 56, 25, 1)
}
</style>