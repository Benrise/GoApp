

<template>
    <div class="slide-card">
        <a href="#" class="slide-card__link">
            <div class="slide-card__img-blackout">
                <div class="slide-card__image">
                    <img :src="imgUrl" :alt="String">
                </div>
            </div>
        </a>
        <div class="slide-card__info-left">
            <BaseButton :label="categoryTitle" class="category " :class="`_category-${categoryName}`"/>
            <div class="slide-card__date">
                <div class="slide-card__day _icon-calendar">
                    {{ day }}
                </div>
                <div class="slide-card__month">
                    {{ month }}
                </div>
            </div>
        </div>
        <div class="slide-card__title">{{ name }}</div>
        <a href="#" class="slide-card__rating">
            <div class="slide-card__rating-score" :class="`_rating-${rating}`">
                {{ rating }}
            </div>
            <div class="slide-card__rating-desc">Оценка посетителей</div>
        </a>
        <div class="slide-card__functions-right">
            <div class="slide-card__functions-right-up">
                <div class="slide-card__geo _icon-city">
                    {{ location }}
                </div>
                <div class="slide-card__price" :class="`_price-${price}`">
                    <span class="_icon-ruble-sign-square-1"></span>
                    <span class="_icon-ruble-sign-square-2"></span>
                    <span class="_icon-ruble-sign-square-3"></span>
                    <div v-if="price === 'free' " class="price__free">Бесплатно</div>
                </div>
            </div>
            <div class="slide-card__functions-right-down">
                <a href="#" class="slide-card__buy-button">Купить билеты</a>
                <button class="slide-card__fav-button _icon-heart"></button>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
    name: "SliderCard",
    components: {BaseButton},
    props:{
        id: Number,
        day: String,
        month: String,
        name: String,
        rating: Number,
        location: String,
        price: String,
        imgUrl: String,
        categoryTitle: String,
        categoryName: String,

    }
})
</script>

<style scoped>

</style>