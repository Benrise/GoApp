<template>
    <FilterButton class="_reset _icon-xmark" @click="reset"><slot></slot></FilterButton>
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