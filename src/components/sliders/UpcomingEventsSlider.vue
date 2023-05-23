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
                :spaceBetween="24"
                :modules="modules"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :slideToClickedSlide="true"
                :prevent-clicks="true"
                :speed=600
            class="upcoming-events__slider">

                <swiper-slide class="swiper-slide" v-for="upcomingEvent in updatedUpcomingEvents" :key="upcomingEvent.id">
                    <SliderCard
                        :imgUrl="upcomingEvent.img"
                        :day="upcomingEvent.day"
                        :month="upcomingEvent.month"
                        :name="upcomingEvent.name"
                        :rating="upcomingEvent.rating"
                        :location="upcomingEvent.location"
                        :price="upcomingEvent.price"
                        :categoryName="upcomingEvent.category.name"
                        :categoryTitle="upcomingEvent.category.title"
                    />
                </swiper-slide>
        </swiper>
        <div class="upcoming-events__slider-btn-next swiper-button-next">
            <img
                src="/images/slider-button.svg"
                alt="Слайдер кнопка вперед"
            />
        </div>
        <div class="upcoming-events__slider-btn-prev swiper-button-prev">
            <img
                src="/images/slider-button.svg"
                alt="Слайдер кнопка назад"
            />
        </div>
        <div
            class="upcoming-events__slider-pagination swiper-pagination"
        ></div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, FreeMode, Navigation, Pagination, Virtual} from "swiper";
import BaseButton from "@/components/ui/BaseButton.vue";
import SliderCard from "@/components/sliders/SliderCard.vue";
import {mapState} from "vuex";

export default {
    components:{
        SliderCard,
        BaseButton,
        Swiper, SwiperSlide
    },
    computed: {
        ...mapState({
            upcomingEvents: state => state.upcomingEvents,
            categories: state => state.categories
        }),
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