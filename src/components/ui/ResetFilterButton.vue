<template>
    <FilterButton class="base-button_reset _icon-xmark" @click="reset"></FilterButton>
</template>

<script>
import FilterButton from "@/components/ui/FilterButton.vue";

export default {
    name: "ResetFilterButton",
    components:{
        FilterButton
    },
    methods:{
        reset(){
            console.log("Reset!")
        }
    }

}
</script>

<style lang="scss">

</style>