<template>
  <main>
    <section
      class="window-form"
      v-for="window in windows"
      :key="window.id"
      :class="{'window-form--active': curId === window.id}"
    >
      <div
        class="container"
        v-if="curId === window.id"
      >
        <button class="window-form__del btn-reset">
          <span>
            <img src="img/close-window-mobile.svg" alt="">
          </span>
          <span>Удалить окно</span>
        </button>
        <form class="window-form__form">
          <main-form-top
            :id="window.id"
          />
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
  import MainFormTop from "@/vue/components/MainFormTop";

  import { computed } from "vue";
  import { useStore } from "vuex";

  const store = useStore()

  const windows = computed(() => store.state.windows)
  const curId = computed(() => store.state.curId)
</script>
