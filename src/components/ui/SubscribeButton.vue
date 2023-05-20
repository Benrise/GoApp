<template>
    <BaseButton class="subscribe__button" @click="subscribe"><slot></slot></BaseButton>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: "SubscribeButton",
    components:{
        BaseButton
    },
    methods:{
        subscribe(){
            console.log("Subscribed!")
        }
    }

}
</script>

<style lang="scss">
@import "src/scss/variables";
.subscribe__button{
  background-color: $funcButton_color !important;
}
</style>