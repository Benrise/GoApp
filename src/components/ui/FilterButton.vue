<template>
    <BaseButton class="filters__item"><slot></slot></BaseButton>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: "FilterButton",
    components:{
        BaseButton
    },

}
</script>

<style lang="scss">
@import "src/scss/variables";
.filters__item{
    color: $secondaryFontColor !important;
    position: relative;
    border: 1px solid $fontColor;
    background: none !important;

}

</style>