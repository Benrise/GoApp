<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "BonusCard"
})
</script>

<template>
    <div class="bonus__card b-card">
        <img src="/images/noise-filter.png" class="b-card__filter" alt="">
        <div class="b-card__sign">
            GO
        </div>
        <div class="b-card__info">
            <div class="b-card__name">
                LATYPOV ARTEM
            </div>
            <div class="b-card__number">
                9002950409356
            </div>
        </div>
        <div class="b-card__logo">
            <div class="b-card__img">
                <img src="/images/go-logo.png" alt="">
                <div class="b-card__label">
                    Бонус
                </div>
            </div>

        </div>
        <button class="b-card__upc _icon-upc-scan">
        </button>
    </div>
</template>

<style scoped>

</style>