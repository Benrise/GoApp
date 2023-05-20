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
            <a v-for="category in categories" v-bind:key="category.id" href="#" class="category" :class="`_category-${category.name}`">{{category.title}}</a>
          </div>
          <div class="recommendations__content">
              <template v-for="recommendedEvent in recommendedEvents">
                <div class="slide-card">
                    <a href="#" class="slide-card__link">
                        <div class="slide-card__img-blackout">
                            <div class="slide-card__image">
                                <img :src="recommendedEvent.img" :alt="recommendedEvent.name">
                            </div>
                        </div>
                    </a>
                    <div class="slide-card__info-left">
                        <div class="category" :class="`_category-${recommendedEvent.category.name}`">
                            {{ recommendedEvent.category.title }}
                        </div>
                        <div class="slide-card__date">
                            <div class="slide-card__day _icon-calendar">{{ recommendedEvent.day }}</div>
                            <div class="slide-card__month">{{ recommendedEvent.month }}</div>
                        </div>
                    </div>
                    <div class="slide-card__title">{{ recommendedEvent.name }}</div>
                    <a href="#" class="slide-card__rating">
                        <div class="slide-card__rating-score" :class="`_rating-${recommendedEvent.rating}`">
                            {{ recommendedEvent.rating }}
                        </div>
                        <div class="slide-card__rating-desc">
                            Оценка посетителей
                        </div>
                    </a>
                    <div class="slide-card__functions-right">
                        <div class="slide-card__functions-right-up">
                            <div class="slide-card__geo _icon-city">{{ recommendedEvent.location }}</div>
                            <div class="slide-card__price " :class="`_price-${recommendedEvent.price}`">
                                <span class="_icon-ruble-sign-square-1"></span>
                                <span class="_icon-ruble-sign-square-2"></span>
                                <span class="_icon-ruble-sign-square-3"></span>
                                <div v-if="recommendedEvent.price === 'free' " class="price__free">Бесплатно</div>

                            </div>
                        </div>
                        <div class="slide-card__functions-right-down">
                            <a href="#" class="slide-card__buy-button"
                            >Купить билеты</a
                            >
                            <button
                                    class="slide-card__fav-button _icon-heart"
                            ></button>
                        </div>
                    </div>
                </div>
              </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseSlider from "@/components/sliders/BaseSlider.vue";
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper";

export default {
    extends: BaseSlider,
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
                    img: 'public/images/events/yoga-promo.jpg',
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
                    img: 'public/images/events/spider-man-promo.jpg',
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
                    img: 'public/images/events/the-beatles-promo.jpg',
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
                    img: 'public/images/events/art-promo.jpg',
                    category: 9
                },

            ]
        }
    },
    computed: {
        updatedRecommendedEvents() {
            return this.recommendedEvents.map(recommendedEvent => {
                return {
                    ...recommendedEvent,
                    category: this.categories.find(category => category.id === recommendedEvent.id)
                };
            });
        }
    },
    created() {
        this.recommendedEvents = this.updatedRecommendedEvents;
    },
};
</script>

<style scoped>

</style>