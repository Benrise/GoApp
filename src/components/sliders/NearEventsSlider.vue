<template>
    <div class="near-events__slider-area">
        <swiper
                :keyboard="{
                    enabled: true,
                    onlyInViewport: true,
                }"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :scrollbar="{
                    enabled: true,
                    el: '.swiper-scrollbar',
                }"
                :direction="'vertical'"
                :slidesPerView="'auto'"
                :mousewheel="true"
                :freeMode="true"
                :spaceBetween="12"
                :modules="modules"
                :slideToClickedSlide="true"
                :prevent-clicks="true"
            class="near-events__slider">
                <swiper-slide v-for="nearEvent in nearEvents" :key="nearEvent.id" class="swiper-slide" >
                    <SliderCard
                        :imgUrl="nearEvent.img"
                        :day="nearEvent.day"
                        :month="nearEvent.month"
                        :name="nearEvent.name"
                        :rating="nearEvent.rating"
                        :location="nearEvent.location"
                        :price="nearEvent.price"
                        :categoryName="nearEvent.category.name"
                        :categoryTitle="nearEvent.category.title"
                    />
                </swiper-slide>
        </swiper>
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>


import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, FreeMode, Scrollbar} from "swiper";
import BaseButton from "@/components/ui/BaseButton.vue";
import SliderCard from "@/components/sliders/SliderCard.vue";

export default {
    components:{
        SliderCard,
        BaseButton,
        Swiper, SwiperSlide
    },
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
            nearEvents: [
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
        updatedNearEvents() {
            return this.nearEvents.map(nearEvent => {
                return {
                    ...nearEvent,
                    category: this.categories.find(category => category.id === nearEvent.category)
                };
            });
        }
    },
    created() {
        this.nearEvents = this.updatedNearEvents;
    },
    setup() {
        return {
            modules: [Autoplay, FreeMode, Scrollbar],
        };
    },
};
</script>

<style scoped>

</style>