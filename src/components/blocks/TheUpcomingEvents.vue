<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__info">
        <h2 class="main-block__title">Предстоящие мероприятия</h2>
        <h3 class="main-block__subtitle _icon-fire">Вот-вот начнутся</h3>
      </div>
      <div class="main-block__buttons">
        <a href="" class="main-block__button">Смотреть все</a>
      </div>
      <div class="main-block__body">
        <div class="upcoming-events">
            <UpcomingEventsSlider/>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>
<script setup>
import UpcomingEventsSlider from "@/components/sliders/UpcomingEventsSlider.vue";
</script>

<style lang="scss">

</style>