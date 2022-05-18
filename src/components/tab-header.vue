<template>
  <li data-window-name="Окно 1" data-tab="1" class="tabs-header__tab">
    <span class="tabs-header__title">
      <p>{{ name }}</p>
    </span>
    <button
      class="tabs-header__close btn-reset btn-del-window"
      @click.stop="$emit('deletWindow', id)"
    >
      <img src="@/assets/img/close.svg" alt="Удалить окно" />
    </button>
  </li>
</template>

<script>
export default {
  name: "tab-header",
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  emits: {
    deletWindow: null,
  },
};
</script>
