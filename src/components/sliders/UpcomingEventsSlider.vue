<template>
    <div class="upcoming-events__slider-area">
        <swiper :navigation="{
    nextEl: '.upcoming-events__slider-btn-next',
    prevEl: '.upcoming-events__slider-btn-prev'
  }"
                :pagination="{
    el: '.upcoming-events__slider-pagination',
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
      slidesPerView: 1,
    }
  }"
                :modules="modules"
                :slideToClickedSlide="true"
                :prevent-clicks="true"
            class="upcoming-events__slider">

                <swiper-slide class="swiper-slide" v-for="upcomingEvent in upcomingEvents" :key="upcomingEvent.id">
                    <div class="slide-card">
                        <a href="#" class="slide-card__link">
                            <div class="slide-card__img-blackout">
                                <div class="slide-card__image">
                                    <img :src="upcomingEvent.img" :alt="upcomingEvent.name">
                                </div>
                            </div>
                        </a>
                        <div class="slide-card__info-left">
                            <div class="category" :class="`_category-${upcomingEvent.category.name}`">
                                {{ upcomingEvent.category.title }}
                            </div>
                            <div class="slide-card__date">
                                <div class="slide-card__day _icon-calendar">{{ upcomingEvent.day }}</div>
                                <div class="slide-card__month">{{ upcomingEvent.month }}</div>
                            </div>
                        </div>
                        <div class="slide-card__title">{{ upcomingEvent.name }}</div>
                        <a href="#" class="slide-card__rating">
                            <div class="slide-card__rating-score" :class="`_rating-${upcomingEvent.rating}`">
                                {{ upcomingEvent.rating }}
                            </div>
                            <div class="slide-card__rating-desc">
                                Оценка посетителей
                            </div>
                        </a>
                        <div class="slide-card__functions-right">
                            <div class="slide-card__functions-right-up">
                                <div class="slide-card__geo _icon-city">{{ upcomingEvent.location }}</div>
                                <div class="slide-card__price " :class="`_price-${upcomingEvent.price}`">
                                    <span class="_icon-ruble-sign-square-1"></span>
                                    <span class="_icon-ruble-sign-square-2"></span>
                                    <span class="_icon-ruble-sign-square-3"></span>
                                    <div v-if="upcomingEvent.price === 'free' " class="price__free">Бесплатно</div>
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
                </swiper-slide>
        </swiper>
        <div class="upcoming-events__slider-btn-next swiper-button-next">
            <img
                src="public/images/slider-button.svg"
                alt="Слайдер кнопка вперед"
            />
        </div>
        <div class="upcoming-events__slider-btn-prev swiper-button-prev">
            <img
                src="public/images/slider-button.svg"
                alt="Слайдер кнопка назад"
            />
        </div>
        <div
            class="upcoming-events__slider-pagination swiper-pagination"
        ></div>
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
            upcomingEvents: [
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
        updatedUpcomingEvents() {
            return this.upcomingEvents.map(UpcomingEvent => {
                return {
                    ...UpcomingEvent,
                    category: this.categories.find(category => category.id === UpcomingEvent.category)
                };
            });
        }
    },
    created() {
        this.upcomingEvents = this.updatedUpcomingEvents;
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