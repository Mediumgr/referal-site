<template>
    <div class="checkbox_container">
        <input type="checkbox" id="checkbox" class="checkbox" :checked="modelValue" v-bind="{
            ...$attrs,
            onChange: ($event) => {
                $emit('update:modelValue', $event.target.checked);
            },
        }" />
        <label for="checkbox" class="label">
            Я&nbsp;даю согласие на&nbsp;обработку моих персональных данных,
            и&nbsp;передачу их&nbsp;в&nbsp;ПАО &laquo;Промсвязьбанк&raquo; для участия
            в&nbsp;программе &laquo;Приведи друга в&nbsp;ПСБ Лаб&raquo;.
        </label>
    </div>
</template>

<script setup>
/* eslint-disable */
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.checkbox_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.checkbox {
    width: 40px;
    height: 40px;
    border: 2px solid rgba(13, 13, 13, 1);
}

.label {
    color: #1B232F;
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
}
</style>
