<template>
    <div class="search-result__slider-area">
        <swiper
            :navigation="{
    nextEl: '.search-result__slider-btn-next',
    prevEl: '.search-result__slider-btn-prev'
  }"
            :pagination="{
    el: '.search-result__slider-pagination',
    clickable: true,
    dynamicBullets: true,
  }"
            :keyboard="{
    enabled: true,
    onlyInViewport: true,
  }"
            :spaceBetween="12"
            :breakpoints="{
    280: {
      slidesPerView: 1
    },
    1100: {
      slidesPerView: 1.2,
    }
  }"
            :modules="modules"
            :slideToClickedSlide="true"
            class="search-result__slider"
        >
            <swiper-slide v-for="event in events" :key="event.id" class="swiper-slide">
                <div class="slide-card">
                    <a href="#" class="slide-card__link">
                        <div class="slide-card__img-blackout">
                            <div class="slide-card__image">
                                <img :src="event.img" :alt="event.name">
                            </div>
                        </div>
                    </a>
                    <div class="slide-card__info-left">
                        <div class="category" :class="`_category-${event.category.name}`">
                            {{ event.category.title }}
                        </div>
                        <div class="slide-card__date">
                            <div class="slide-card__day _icon-calendar">
                                {{ event.day }}
                            </div>
                            <div class="slide-card__month">
                                {{ event.month }}
                            </div>
                        </div>
                    </div>
                    <div class="slide-card__title">{{ event.name }}</div>
                    <a href="#" class="slide-card__rating">
                        <div class="slide-card__rating-score" :class="`_rating-${event.rating}`">
                            {{ event.rating }}
                        </div>
                        <div class="slide-card__rating-desc">Оценка посетителей</div>
                    </a>
                    <div class="slide-card__functions-right">
                        <div class="slide-card__functions-right-up">
                            <div class="slide-card__geo _icon-city">
                                {{ event.location }}
                            </div>
                            <div class="slide-card__price" :class="`_price-${event.price}`">
                                <span class="_icon-ruble-sign-square-1"></span>
                                <span class="_icon-ruble-sign-square-2"></span>
                                <span class="_icon-ruble-sign-square-3"></span>
                                <div v-if="event.price === 'free' " class="price__free">Бесплатно</div>
                            </div>
                        </div>
                        <div class="slide-card__functions-right-down">
                            <a href="#" class="slide-card__buy-button">Купить билеты</a>
                            <button class="slide-card__fav-button _icon-heart"></button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="search-result__slider-btn-next swiper-button-next">
            <img src="public/images/slider-button.svg" alt="Слайдер кнопка вперед">
        </div>
        <div class="search-result__slider-btn-prev swiper-button-prev">
            <img src="public/images/slider-button.svg" alt="Слайдер кнопка назад">
        </div>
        <div class="search-result__slider-pagination swiper-pagination"></div>

    </div>
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
            events: [
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
        updatedEvents() {
            return this.events.map(event => {
                return {
                    ...event,
                    category: this.categories.find(category => category.id === event.category)
                };
            });
        }
    },
    created() {
        this.events = this.updatedEvents;
    },
    setup() {
        return {
            modules: [Autoplay, FreeMode, Navigation, Pagination],
        };
    },
};
</script>

<style scoped>

</style>