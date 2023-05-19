<template>
    <swiper :slides-per-view="auto"
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
            :breakpoints=" {
            280:    {
                        slidesPerView: 1
                    },
            320:    {
                         slidesPerView: 2
                    },
            580:    {
                        slidesPerView: 3,
                    },
            1100:   {
                        slidesPerView: 6
                    }
            }"
            :modules="modules"
            :isLinear="true"
            wrapperClass= "swiper-wrapper swiper-wrapper_linear"
            class="event-categories__slider">
            <template v-for="(chunk, index) in chunkedCategories">
                <swiper-slide class="swiper-slide">
                    <div class="event-categories__column">
                        <div class="event-categories__item" v-for="category in chunk" :key="category.id">
                            <a href="" :class="`_category-${category.name}`" class="category">{{ category.ru }}</a>
                        </div>
                    </div>
                </swiper-slide>
            </template>
    </swiper>
</template>

<script>
import BaseSlider from './BaseSlider.vue';
import { Autoplay,FreeMode} from 'swiper';
export default {
    extends: BaseSlider,
    data() {
        return {
            categories: [
                {
                    id: 1,
                    ru: "Путешествия",
                    name: "travel"
                },
                {
                    id: 2,
                    ru: "Здоровье и красота",
                    name: "healthAndBeauty"
                },
                {
                    id: 3,
                    ru: "Фильмы",
                    name: "movie"
                },
                {
                    id: 4,
                    ru: "Спорт и фитнес",
                    name: "sportAndFitness"
                },
                {
                    id: 5,
                    ru: "Музыка",
                    name: "music"
                },
                {
                    id: 6,
                    ru: "Концерт",
                    name: "concert"
                },
                {
                    id: 7,
                    ru: "Комедия",
                    name: "comedy"
                },
                {
                    id: 8,
                    ru: "Вечеринка",
                    name: "party"
                },
                {
                    id: 9,
                    ru: "Театр",
                    name: "theater"
                },
                ]

        }
    },
    computed: {
        chunkedCategories() {
            let chunks = [];
            let chunk = [];
            let flag = false;
            for (let i = 0; i < this.categories.length; i++) {
                chunk.push(this.categories[i]); //+1 в мелкий
                if (chunk.length === 2){
                    chunks.push(chunk)
                    chunk = []
                    flag = true
                    continue
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