<template>
    <div class="input-section">
        <input :id="label" :type="type" :value="modelValue" v-bind="{
            ...$attrs,
            onInput: ($event) => {
                $emit('update:modelValue', $event.target.value)
            }
        }">
        <label :for="label">{{ text }}</label>
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

input {
    outline: none;
    border: none;
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

    // &:valid+label {
    //     transform: translateY(-20px);
    // }



}

label {
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
</style>