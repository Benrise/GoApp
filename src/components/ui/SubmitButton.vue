<template>
    <BaseButton class="main-block__button_submit" @click="submit"><slot></slot></BaseButton>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: "SubmitButton",
    components:{
        BaseButton
    },
    methods:{
        submit(){
            console.log("Submit!")
        }
    }

}
</script>

<style lang="scss">
@import "src/scss/variables";
.main-block__button_submit{
    background: $funcButton_color !important;
}
</style>