<template>
  <header class="header">

    <section class="top-header">
      <div class="container">
        <div class="top-header__wrapper">
          <div class="top-header__right">
            <button class="top-header__how-work btn-reset">Как это работает</button>
            <button class="top-header__conditions btn-reset terms-use-btn">Условия использования сервиса</button>
          </div>
          <div class="top-header__left">
            <button class="top-header__order-calculation btn-reset individual-project-btn">Заказать просчёт элементов по индивидуальному проекту</button>
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
              <li data-window-name="Окно 1" data-tab="1" class="tabs-header__tab tabs-header__tab--active">
                <span class="tabs-header__title">
                  <p>Окно 1</p>
                </span>
                <button class="tabs-header__close btn-reset btn-del-window">
                  <img src="img/close.svg" alt="Удалить окно">
                </button>
              </li>
            </ul>
            <button id="add-window" class="tabs-header__add-new btn-reset">
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

</script>
