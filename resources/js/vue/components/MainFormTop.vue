<template>
  <div class="window-form__top">
    <div class="window-form__name">
      <main-form-input
        :value="window.name"
        @inputValue="(newName) => updateName(props.id, newName)"
      >
        Введите название проёма
      </main-form-input>
    </div>
    <div class="window-form__width">
      <main-form-input
        :value="window.width"
        :isCenter="true"
        :maxValue="50000"
        :minValue="1000"
        @changeValue="(newWidth) => updateWidth(props.id, newWidth)"
      >
        Укажите ширину проёма, мм
      </main-form-input>
    </div>
    <div class="window-form__height">
      <main-form-input
        :value="window.width"
        :isCenter="true"
        :maxValue="50000"
        :minValue="1000"
        @changeValue="(newHeight) => updateHeight(props.id, newHeight)"
      >
        Укажите высоту проёма, мм
      </main-form-input>
    </div>
    <div class="window-form__quantity">
      <main-form-quantity
        :quantity="window.quantity"
        :maxQuantity="10"
        @changeQuantity="(newQuantity) => updateQuantity(props.id, newQuantity)"
      >
        Выберите количество окон
      </main-form-quantity>
    </div>
  </div>
</template>

<script setup>
  import MainFormInput from "@/vue/components/MainFormInput";
  import MainFormQuantity from "@/vue/components/MainFormQuantityInput";
  import { computed, defineProps } from "vue";
  import { useStore } from "vuex";

  const props = defineProps({
    id: {
      type: Number,
      required: true
    }
  })
  const store = useStore()

  const window = computed(() => store.state.windows[props.id])

  const updateName = (id, name) => store.commit('setWindowName', {id, name})
  const updateWidth = (id, width) => store.commit('setWindowWidth', {id, width})
  const updateHeight = (id, height) => store.commit('setWindowHeight', {id, height})
  const updateQuantity = (id, quantity) => store.commit('setWindowQuantity', {id, quantity})
</script>
