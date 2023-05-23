<template>
    <Swiper :slides-per-view="auto"
            :loop="true"
            :speed="5000"
            :autoplay=" {
                enabled: true,
                delay: 1,
                disableOnInteraction: false,
            }"
            :keyboard="{
                enabled: true,
                onlyInViewport: true,
            }"
            :freeMode="true"
            :freeModeMomentum="true"
            :freeModeMomentumRatio="0.5"
            :freeModeMomentumBounce="false"
            :pauseOnMouseEnter="true"
            :reverseDirection="true"
            :slidesPerView=4
            :modules="modules"

            wrapperClass= "swiper-wrapper swiper-wrapper_linear"
            class="event-categories__slider">
                <SwiperSlide v-for="chunk in chunkedCategories" v-bind:eventCategoriesData="chunk">
                  <div class="event-categories__column">
                      <div class="event-categories__item" v-for="category in chunk" :key="category.id">
                          <BaseButton :label="category.title" :class="`_category-${category.name}`" class="category"/>
                      </div>
                  </div>
              </SwiperSlide>
    </Swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, FreeMode} from "swiper";
import BaseButton from "@/components/ui/BaseButton.vue";
import {mapState} from "vuex";
export default {
    name: "EventCategoriesSlider",
    components: {BaseButton, SwiperSlide, Swiper},
    props:{},
    computed: {
        ...mapState({
            categories: state => state.categories
        }),
        chunkedCategories() {
            let chunks = [];
            let chunk = [];
            let flag = false;
            for (let i = 0; i < this.categories.length; i++) {
                chunk.push(this.categories[i]);
                if (chunk.length === 2){
                    chunks.push(chunk)
                    chunk = []
                    flag = true
                }
                else if (flag){
                    chunks.push(chunk)
                    chunk = []
                    flag = false
                }
            }
            return chunks;
        }

    },
    setup() {
        return {
            modules: [Autoplay, FreeMode],
        };
    },
};
</script>

<style scoped>

</style>