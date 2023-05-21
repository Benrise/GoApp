<script>
import {defineComponent} from 'vue'
import NearEventsSlider from "@/components/sliders/NearEventsSlider.vue";
import SubmitButton from "@/components/ui/SubmitButton.vue";
import TheMap from "@/components/TheMap.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CloseButton from "@/components/ui/CloseButton.vue";
import BackgroundBlackout from "@/components/ui/BackgroundBlackout.vue";


export default defineComponent({
    name: "BaseModal",
    components: {BackgroundBlackout, CloseButton, BaseButton, TheMap, SubmitButton, NearEventsSlider},
    props:{
        title:{
            type: String,
            default: "Заголовок модального окна"
        },
        show:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        closeModal(){
            this.$emit('update:show', false)
        }
    },
})
</script>

<template>
        <BackgroundBlackout v-if="show" @click="closeModal()">
            <section class="main-block modal">
                <div class="modal__body">
                    <div @click.stop class="main-block__container _heading-block">
                        <div class="main-block__upper">
                            <div class="main-block__info">
                                <h2 class="main-block__title">{{title}}</h2>
                            </div>
                            <CloseButton
                                @click="closeModal"
                            ></CloseButton>
                        </div>
                        <div class="main-block__body">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </section>
        </BackgroundBlackout>
</template>

<style lang="scss">

</style>