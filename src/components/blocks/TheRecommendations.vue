<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__upper">
        <div class="main-block__info">
          <h2 class="main-block__title">Горячие подборки</h2>
          <h3 class="main-block__subtitle">
            Есть предпочтения? Что-то исключить или поставить в приоритет?
          </h3>
        </div>
      </div>
      <div class="main-block__body">
        <div class="recommendations">
          <div class="recommendations__categories">
            <BaseButton :label="category.title" v-for="(category, index) in categories" :key="index" href="#" class="category" :class="`_category-${category.name}`"/>
          </div>
          <div class="recommendations__content">
              <template v-for="(recommendedEvent, index) in updatedRecommendedEvents">

                  <SliderCard
                          v-if="index < eventsToShow"
                          :imgUrl="recommendedEvent.img"
                          :day="recommendedEvent.day"
                          :month="recommendedEvent.month"
                          :name="recommendedEvent.name"
                          :rating="recommendedEvent.rating"
                          :location="recommendedEvent.location"
                          :price="recommendedEvent.price"
                          :categoryName="recommendedEvent.category.name"
                          :categoryTitle="recommendedEvent.category.title"
                  />
              </template>
          </div>
            <ShowMoreButton
                    :label="`Показать больше`"
                    @click="showMoreEvents"
                    v-if="hasMoreEvents"
            />

        </div>
      </div>
    </div>
  </section>
</template>

<script>


import ShowMoreButton from "@/components/ui/ShowMoreButton.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import SliderCard from "@/components/sliders/SliderCard.vue";
import {mapState} from "vuex";

export default {
    components: {SliderCard, BaseButton, ShowMoreButton},
    data() {
        return {
            eventsToShow: 4
        }
    },
    computed: {
        ...mapState({
            recommendedEvents: state => state.recommendedEvents,
            categories: state => state.categories
        }),
        updatedRecommendedEvents() {
            return this.recommendedEvents.map(recommendedEvent => {
                return {
                    ...recommendedEvent,
                    category: this.categories.find(category => category.id === recommendedEvent.category)
                };
            });
        },
        hasMoreEvents() {
            return this.eventsToShow < this.updatedRecommendedEvents.length;
        }
    },
    created() {
        console.log(this.categories);
        this.recommendedEvents = this.updatedRecommendedEvents;
    },
    methods: {
        showMoreEvents() {
            this.eventsToShow += 4;
        }
    },



};
</script>

<style scoped>

</style>