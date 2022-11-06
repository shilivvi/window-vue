<template>
  <li class="tabs-header__tab">
    <span class="tabs-header__title">
      <p>
        <slot/>
      </p>
    </span>
    <button
      class="tabs-header__close btn-reset btn-del-window"
      @click.prevent.stop="$emit('deleteWindow', props.id)"
    >
      <img src="img/close.svg" alt="Удалить окно">
    </button>
  </li>
</template>

<script setup>
  import {defineEmits, defineProps} from "vue";

  const props = defineProps({
    id: {
      type: Number,
      required: true
    }
  })

  const emit = defineEmits(['deleteWindow'])
</script>
