<template>
  <header class="header">

    <section class="top-header">
      <div class="container">
        <div class="top-header__wrapper">
          <div class="top-header__right">
            <button class="top-header__how-work btn-reset">Как это работает</button>
            <button class="top-header__conditions btn-reset">Условия использования сервиса</button>
          </div>
          <div class="top-header__left">
            <button class="top-header__order-calculation btn-reset">Заказать просчёт элементов по индивидуальному проекту</button>
          </div>
        </div>
      </div>
    </section>

    <section class="header__content">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__top">
            <div class="header__right">
              <div class="header__logo">
                <img src="img/logo.svg" alt="Конструктор декора">
              </div>
              <h1 class="header__title">КОНСТРУКТОР ДЕКОРА ОКОН</h1>
            </div>
            <div class="header__btn">
              <button id="get-specification" class="btn-get-specification btn-reset">Получить спецификацию</button>
              <button id="btn-save-project" class="btn-save-project btn-reset">Сохранить проект</button>
            </div>
          </div>
          <div class="header__top header-mobile">
            <div class="header-mobile__logo">
              <img src="img/logo.svg" alt="Конструктор декора">
            </div>
            <div class="header-mobile__title">КОНСТРУКТОР ДЕКОРА ОКОН</div>
            <button class="header-mobile__btn btn-reset individual-project-btn">Заказать просчёт элементов<br> по индивидуальному проекту</button>
          </div>
          <div class="header__bottom">
            <ul class="header__tabs tabs-header">
              <header-tab
                v-for="window in windows"
                :key="window.id"
                :class="{ 'tabs-header__tab--active': curId === window.id }"
                @click.prevent="selectWindow(window.id)"
                :id="window.id"
                @deleteWindow="(windowId) => delWindow(windowId)"
              >
                {{ window.name }}
              </header-tab>
            </ul>
            <button
              class="tabs-header__add-new btn-reset"
              @click.prevent="addWindow()"
            >
              <span class="tabs-header__add">
                <img width="10" height="10" src="img/plus.svg" alt="добавить проём">
              </span>
              <span class="tabs-header__add-text">добавить проём</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import HeaderTab from "@/vue/components/HeaderTab"
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const windows = computed(() => store.state.windows)
const curId = computed(() => store.state.curId)

const addWindow = () => store.commit('setNewWindow')
const selectWindow = (windowId) => store.commit('setCurWindow', windowId)
const delWindow = (windowId) => store.commit('delWindow', windowId)
</script>
