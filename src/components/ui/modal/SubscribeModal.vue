<script>
import {defineComponent} from 'vue'
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseModal from "@/components/ui/modal/BaseModal.vue";
import SubscribeButton from "@/components/ui/SubscribeButton.vue";
import { mapState } from 'vuex';
import ShowMoreButton from "@/components/ui/ShowMoreButton.vue";
export default defineComponent({
    name: "SubscribeModal",
    components: {ShowMoreButton, SubscribeButton, BaseModal, BaseButton},
    data(){
        return {
            showCategories: false,
        }
    },
    computed: {
        ...mapState({
            categories: state => state.categories
        }),
        style() {
            return `height: ${this.showCategories ? this.$el.scrollHeight : 0}px`;
        }
    },

    methods: {
        toggleCategories() {
            this.showCategories = !this.showCategories;
        },
    },

})
</script>

<template>
    <BaseModal :title="`Подпишитесь на обновления`">
        <div class="subscribe__main">
            <form action="" class="subscribe__form">
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
        <div class="main-block__subtitle">
            Интересует что-то конкретное?
        </div>
        <div class="main-block__body">
            <ShowMoreButton
                    :label="`Категории`"
                    @click="toggleCategories"
                    :class="{ 'rotate-arrow': showCategories }"
            />
            <transition name="fadeHeight" mode="out-in">
                <div

                    class="recommendations__categories"
                    v-if="showCategories"
                >
                <BaseButton :label="category.title"
                            v-for="(category, index) in categories"
                            :key="index"
                            href="#"
                            class="category"
                            :class="`_category-${category.name}`"/>
            </div>
            </transition>
        </div>
    </BaseModal>
</template>

<style lang="scss">
.fadeHeight-leave-active {
    transition: max-height 0.2s ease-out, opacity 0.2s ease-out;
    max-height: 235px;
    opacity: 1;
}
.fadeHeight-leave-to {
    overflow: hidden;
    transition: max-height 0.2s ease-out, opacity 0.2s ease-out;
    opacity: 0;
    max-height: 0;
}

.fadeHeight-enter-active{
    overflow: hidden;
    transition: max-height 0.2s ease-in, opacity 0.2s ease-out;
    opacity: 0;
    max-height: 0;
}
.fadeHeight-enter-to{
    transition: max-height 0.2s ease-out, opacity 0.2s ease-out;
    max-height: 235px;
    opacity: 1;
}

</style>