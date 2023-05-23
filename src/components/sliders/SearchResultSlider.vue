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
            :spaceBetween="24"
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
            :speed=600
            >

            <swiper-slide v-for="event in updatedEvents" :key="event.id" class="swiper-slide">
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
            <img src="/images/slider-button.svg" alt="Слайдер кнопка вперед">
        </div>
        <div class="search-result__slider-btn-prev swiper-button-prev">
            <img src="/images/slider-button.svg" alt="Слайдер кнопка назад">
        </div>
        <div class="search-result__slider-pagination swiper-pagination"></div>

    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, FreeMode, Navigation, Pagination, Virtual} from "swiper";
import BaseButton from "@/components/ui/BaseButton.vue";
import SliderCard from "@/components/sliders/SliderCard.vue";
import {mapState} from "vuex";

export default {
    components: {SliderCard, BaseButton, Swiper,SwiperSlide, Virtual},
    computed: {
        ...mapState({
            events: state => state.events,
            categories: state => state.categories
        }),
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