<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__info">
        <h2 class="main-block__title">Быстрый поиск</h2>
        <h3 class="main-block__subtitle">Поиск по мероприятиям и событиям</h3>
      </div>
      <form method="post" class="main-block__form">
        <div class="search-main search">
          <div class="search__form">
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
          <SubmitButton>Поиск</SubmitButton>
        </div>
        <div class="filters">
            <FilterButton>Что именно?</FilterButton>
            <FilterButton>Где?</FilterButton>
            <DatePicker></DatePicker>
            <FilterButton>Целевая категория</FilterButton>
            <FilterButton>Рейтинг</FilterButton>
            <FilterButton>Разное</FilterButton>
          <ResetFilterButton>Сброс</ResetFilterButton>
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
<script >
import SearchResultSlider from "@/components/sliders/SearchResultSlider.vue";
import DatePicker from "@/components/ui/DatePicker.vue";
import SubmitButton from "@/components/ui/SubmitButton.vue";
import ResetFilterButton from "@/components/ui/ResetFilterButton.vue";
import FilterButton from "@/components/ui/FilterButton.vue";


export default {
    components: {
        FilterButton,
        ResetFilterButton,
        SubmitButton,
        DatePicker, SearchResultSlider
    },
};
</script>