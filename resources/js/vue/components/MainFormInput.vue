<template>
  <input
    class="input-width"
    type="text"
    v-model="value"
    @input.prevent.stop="(e) => action(e)"
    @change.prevent.stop="(e) => action(e)"
  >
  <p
    class="window-form__help"
    :class="{'window-form__help--center': isCenter}"
  >
    <slot/>
  </p>
</template>

<script setup>
  import {defineProps, defineEmits, ref} from "vue";

  const prods = defineProps({
    value: {
      type: [String, Number],
      required: true
    },
    isCenter: {
      type: Boolean,
      default: false
    },
    maxValue: {
      type: Number,
      default: null
    },
    minValue: {
      type: Number,
      default: null
    }
  })

  const value = ref(prods.value)

  const emit = defineEmits(['inputValue', 'changeValue'])

  const checkRange = () => {
    if(value.value > prods?.maxValue){
      return prods.maxValue
    }

    if(value.value < prods.minValue){
      return  prods.minValue
    }

    return value.value
  }

  const action = (e) => {
    const newValue = checkRange()
    if(e.type === 'change'){
      emit('changeValue', newValue)
    }else if(e.type === 'input'){
      emit('inputValue', newValue)
    }
  }

</script>
