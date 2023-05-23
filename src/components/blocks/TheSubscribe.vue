<script>
import {defineComponent} from 'vue'
import SubscribeButton from "@/components/ui/SubscribeButton.vue";

export default defineComponent({
    name: "TheSubscribe",
    components: {SubscribeButton},
    props: {
        isModal: {
            type: Boolean,
            default: false,
        },
        title:{
            type: String,
            default: "Заголовок"

        },
  }
})
</script>

<template>
    <div class="subscribe">
        <div :class="{ _modal: isModal }" class="subscribe__title">
            {{title}}
        </div>
        <div class="subscribe__main">
            <form class="subscribe__form">
                <input
                        type="text"
                        placeholder="Электронная почта"
                        class="subscribe__input"
                />
                <SubscribeButton :label="`Подписаться`"/>
            </form>
            <div class="subscribe__policy">
                Подписываясь на рассылку, вы соглашаетесь с
                <a href="#" class="subscribe__policy-link"
                >политикой конфиденциальности</a
                >
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>