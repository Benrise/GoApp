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
                <SliderCard
                    :imgUrl="event.img"
                    :day="event.day"
                    :month="event.month"
                    :name="event.name"
                    :rating="event.rating"
                    :location="event.location"
                    :price="event.price"
                    :categoryName="event.category.name"
                    :categoryTitle="event.category.title"
                />
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

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper";
import BaseButton from "@/components/ui/BaseButton.vue";
import SliderCard from "@/components/sliders/SliderCard.vue";

export default {
    components: {SliderCard, BaseButton, Swiper,SwiperSlide},
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