<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__info">
        <h2 class="main-block__title">Быстрый поиск</h2>
        <h3 class="main-block__subtitle">Поиск по мероприятиям и событиям</h3>
      </div>
      <form method="post" class="main-block__form">
        <div class="search-main search">
          <div action="" class="search__form">
            <button type="submit" class="search__button _icon-magnify"></button>
            <input
              autocomplete="off"
              type="text"
              name="form[]"
              data-error="Ошибка"
              placeholder="События, артисты и места"
              class="search__input"
            />
          </div>
          <button type="button" class="main-block__button toggle">Поиск</button>
        </div>
        <div class="filters">
          <div class="filters__item vs-filter _what-filter"></div>
          <div class="filters__item vs-filter _where-filter"></div>
          <div class="filters__item _when-filter">
            <input
              type="text"
              class="date-picker"
              placeholder="Когда и во сколько?"
            />
          </div>
          <div class="filters__item vs-filter _price-filter"></div>
          <div class="filters__item vs-filter _rating-filter"></div>
          <div class="filters__item vs-filter _other-filter"></div>
          <button class="filters__item _reset _icon-xmark" type="reset">
            <span>Сброс</span>
          </button>
        </div>
      </form>
      <div class="main-block__body">
        <div class="search-result">
          <div class="search-result__upper">
            <div class="search-result__text">
              <h3>Найдено 12 различных мероприятий</h3>
            </div>
            <div class="search-result__sort">
              <div class="search-result__sort-button">
                <div
                  class="filters__item vs-filter _sort-search filters__item_filled"
                ></div>
              </div>
            </div>
          </div>
          <SearchResultSlider></SearchResultSlider>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>
<script setup>
import SearchResultSlider from "@/components/sliders/SearchResultSlider.vue";
</script>