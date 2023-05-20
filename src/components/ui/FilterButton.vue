<template>
    <BaseButton class="filters__item" @click="filter"><slot></slot></BaseButton>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    name: "FilterButton",
    components:{
        BaseButton
    },
    methods:{
        filter(){
            console.log("Filter!")
        }
    }

}
</script>

<style lang="scss">
@import "src/scss/variables";
.filters__item{
    color: $secondaryFontColor;
    position: relative;
    border: 1px solid $fontColor;
    background: none !important;

}

</style>