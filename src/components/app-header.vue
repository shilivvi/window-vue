<template>
  <header class="header">
    <section class="header__content">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__top">
            <div class="header__right">
              <h1 class="header__title">КОНСТРУКТОР ДЕКОРА ОКОН</h1>
            </div>
            <div class="header__btn">
              <button
                id="get-specification"
                class="btn-get-specification btn-reset"
              >
                Получить спецификацию
              </button>
              <button id="btn-save-project" class="btn-save-project btn-reset">
                Сохранить проект
              </button>
            </div>
          </div>

          <!-- FIXME modile header -->

          <div class="header__bottom">
            <ul
              class="header__tabs tabs-header"
              v-for="window in windows"
              :key="window.id"
            >
              <tab-header
                :name="window.name"
                :id="window.id"
                :class="{
                  'tabs-header__tab--active': activeWindowId === window.id,
                }"
                @click="selectWindow(window.id)"
                @deletWindow="delWindow"
              />
            </ul>
            <button
              id="add-window"
              class="tabs-header__add-new btn-reset"
              @click="addWindow"
            >
              <span class="tabs-header__add">
                <img
                  width="10"
                  height="10"
                  src="@/assets/img/plus.svg"
                  alt="добавить проём"
                />
              </span>
              <span class="tabs-header__add-text">добавить проём</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import { ref, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import TabHeader from "@/components/tab-header.vue";

export default {
  name: "appHeader",
  components: {
    TabHeader,
  },
  setup() {
    const store = useStore();
    const windows = computed(() => store.state.windows);
    const activeWindowId = ref(store.state.windows[0].id);

    function selectWindow(id) {
      activeWindowId.value = id;
    }

    function addWindow() {
      store.commit("ADD_WINDOW");
    }

    function delWindow(id) {
      store.commit("DEL_WINDOW", { id });
      activeWindowId.value = store.state.windows[0].id;
      console.log(store.state.windows[0].id);
      console.log(activeWindowId);
    }

    return {
      windows,
      addWindow,
      delWindow,
      selectWindow,
      activeWindowId,
    };
  },
};
</script>

TabHeader
