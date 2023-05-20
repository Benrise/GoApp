<template>
    <BaseButton class="main-block__button_show-more" />
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: "ShowMoreButton",
    components:{
        BaseButton
    },

}
</script>

<style lang="scss">
@import "src/scss/variables";
.main-block__button_show-more{
    max-width: none;
    width: 100%;
    justify-content: center;
    background: none;
    color: $funcButton_color;
    border: 1px solid $funcButton_color;
}
</style>