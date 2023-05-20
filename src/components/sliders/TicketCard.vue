

<template>
    <div class="tickets__slide tickets-card">
        <a href="#" class="tickets-card__link">
            <div class="tickets-card__img-blackout">
                <div class="tickets-card__image">
                    <img :src="imgUrl" :alt="title">
                </div>
            </div>
            <div class="tickets-card__category">
                <BaseButton :label="categoryTitle" class="category " :class="`_category-${categoryName}`"/>
            </div>
            <div class="tickets-card__text">
                <div class="tickets-card__title">
                    {{ title }}
                </div>
                <div class="tickets-card__additional">
                    {{ place}}
                </div>
            </div>
        </a>
        <div class="tickets-card__down">
            <div class="tickets-card__date">
                <div class="tickets-card__date-upper">
                            <span class="tickets-card__date-text">
                              Дата:
                            </span>
                    <div class="tickets-card__dd-mm-yy">
                        {{ date }}
                    </div>
                </div>
                <div class="tickets-card__date-down">
                            <span class="tickets-card__date-text">
                              Время:
                            </span>
                    <div class="tickets-card__hour">
                        {{time}} ({{timeZone}})
                    </div>
                </div>

            </div>
            <button class="tickets-card__qr _icon-upc-scan"></button>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
    name: "TicketCard",
    components: {BaseButton},
    props:{
        id: 1,
        title: String,
        place: String,
        date: Date,
        time: String,
        timeZone: String,
        imgUrl: String,
        categoryName: String,
        categoryTitle: String,
        status: Boolean
    }
})
</script>

<style scoped>

</style>