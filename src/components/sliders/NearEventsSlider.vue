<template>
    <div class="near-events__slider-area">
        <swiper
                :keyboard="{
                    enabled: true,
                    onlyInViewport: true,
                }"
                :scrollbar="{
                    enabled: true,
                    el: '.swiper-scrollbar',
                    draggable: true,
                }"

                :direction="'vertical'"
                :mousewheel="true"
                :modules="modules"
                :freeModeMomentum="true"
                :freeModeMomentumRatio="0.5"
                :freeModeMomentumBounce="false"
                :freemode=true
                :spaceBetween=24
                :slidesPerView="'auto'"
                :speed=600

            class="near-events__slider">
                <swiper-slide v-for="nearEvent in updatedNearEvents" :key="nearEvent.id" :virtualIndex="nearEvent.id" class="swiper-slide" >
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
        <div aria-label="Scroll" class="swiper-scrollbar"></div>
    </div>
</template>

<script>


import { Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, FreeMode, Scrollbar, Virtual} from "swiper";
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
            nearEvents: state => state.nearEvents,
            categories: state => state.categories
        }),
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

<style>

</style>