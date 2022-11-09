<template>
  <div class="window-form__quantity">
    <div class="window-form__quantity-input">
      <button
        @click.prevent.stop="decQuantity()"
        class="minus-quantity btn-reset"
      >
        <img src="img/minus-circle.svg" alt="Увеличить количество окон">
      </button>
      <div class="window-form__quantity-quantity">{{ value }} шт.</div>
      <input type="hidden"
        v-model="value"
      >
      <button
        @click.prevent.stop="incQuantity()"
        class="plus-quantity btn-reset"
      >
        <img src="img/plus-circle.svg" alt="Уменьшить количество окон">
      </button>
    </div>
    <p class="window-form__help window-form__help--center">
      <slot/>
    </p>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref} from "vue";

  const props = defineProps({
    quantity: {
      type: Number,
      required: true
    },
    maxQuantity: {
      type: Number,
      default: null
    }
  })

  const value = ref(props.quantity)

  const emit = defineEmits(['changeQuantity'])

  const decQuantity = () => {
    if(value.value > 1){
      value.value = value.value - 1
      emit('changeQuantity', value.value)
    }
  }

  const incQuantity = () => {
    if(value.value + 1 <= props?.maxQuantity){
      value.value = value.value + 1
      emit('changeQuantity', value.value)
    }
  }
</script>
