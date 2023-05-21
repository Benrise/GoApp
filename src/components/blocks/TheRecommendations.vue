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
              <template v-for="(recommendedEvent, index) in recommendedEvents">

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

export default {
    components: {SliderCard, BaseButton, ShowMoreButton},
    data() {
        return {
            categories: [
                {
                    id: 0,
                    title: "Путешествия",
                    name: "travel"
                },
                {
                    id: 1,
                    title: "Здоровье и красота",
                    name: "healthAndBeauty"
                },
                {
                    id: 2,
                    title: "Фильмы",
                    name: "movie"
                },
                {
                    id: 3,
                    title: "Спорт и фитнес",
                    name: "sportAndFitness"
                },
                {
                    id: 4,
                    title: "Музыка",
                    name: "music"
                },
                {
                    id: 5,
                    title: "Концерт",
                    name: "concert"
                },
                {
                    id: 6,
                    title: "Комедия",
                    name: "comedy"
                },
                {
                    id: 7,
                    title: "Вечеринка",
                    name: "party"
                },
                {
                    id: 8,
                    title: "Театр",
                    name: "theater"
                },
                {
                    id:9,
                    title: "Культура",
                    name: "art"
                }
            ],
            recommendedEvents: [
                {
                    id: 1,
                    day: "10",
                    month: "мая",
                    name: "Yoga Material",
                    rating: 7.9,
                    location: "Москва",
                    price: 'low',
                    img: '/images/events/yoga-promo.png',
                    category: 3
                },
                {
                    id: 2,
                    day: "23",
                    month: "мая",
                    name: "Человек-павук",
                    rating: 7.7,
                    location: "Москва",
                    price: 'avg',
                    img: '/images/events/spider-man-promo.png',
                    category: 2
                },
                {
                    id: 3,
                    day: "12",
                    month: "мая",
                    name: "Come Together",
                    rating: 9.9,
                    location: "Москва",
                    price: 'high',
                    img: '/images/events/the-beatles-promo.png',
                    category: 4
                },
                {
                    id: 4,
                    day: "31",
                    month: "мая",
                    name: "ART - Цветная полоса",
                    rating: 8,
                    location: "Реутов",
                    price: 'free',
                    img: '/images/events/art-promo.png',
                    category: 9
                },
                {
                    id: 5,
                    day: "10",
                    month: "мая",
                    name: "Yoga Material",
                    rating: 7.9,
                    location: "Москва",
                    price: 'low',
                    img: '/images/events/yoga-promo.png',
                    category: 3
                },
                {
                    id: 6,
                    day: "23",
                    month: "мая",
                    name: "Человек-павук",
                    rating: 7.7,
                    location: "Москва",
                    price: 'avg',
                    img: '/images/events/spider-man-promo.png',
                    category: 2
                },
                {
                    id: 7,
                    day: "12",
                    month: "мая",
                    name: "Come Together",
                    rating: 9.9,
                    location: "Москва",
                    price: 'high',
                    img: '/images/events/the-beatles-promo.png',
                    category: 4
                },
                {
                    id: 8,
                    day: "31",
                    month: "мая",
                    name: "ART - Цветная полоса",
                    rating: 8,
                    location: "Реутов",
                    price: 'free',
                    img: '/images/events/art-promo.png',
                    category: 9
                },

            ],
            eventsToShow: 4
        }
    },
    computed: {
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