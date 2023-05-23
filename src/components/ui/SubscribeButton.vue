<template>
    <BaseButton aria-label="Subscribe" class="base-button_subscribe" @click="subscribe"></BaseButton>
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

</style>