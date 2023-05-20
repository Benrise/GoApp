<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__upper">
        <div class="main-block__info">
          <h2 class="main-block__title">Мероприятия рядом</h2>
          <h3 class="main-block__subtitle">Карта ближайших мероприятий</h3>
        </div>
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
      </div>

      <div class="main-block__body">
        <div class="near-events">
          <div class="near-events__main">
              <TheMap/>
              <NearEventsSlider />
          </div>
          <div class="near-events__below">
            <div class="near-events__show-categories-toggle"></div>
            <div class="near-events__categories"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style  scoped>

</style>
<script setup>
import NearEventsSlider from "@/components/sliders/NearEventsSlider.vue";
import TheMap from "@/components/TheMap.vue";
import SubmitButton from "@/components/ui/SubmitButton.vue";
</script>