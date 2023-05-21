

<template>
    <div class="main-block__filter">
        <FilterButton
                :label="selected"
                class="main-block__select select"
                @click="isVisible = !isVisible"
        >
        </FilterButton>
        <div
                class="select__options"
                v-if="isVisible"

        >
            <BaseButton class="select__option"
                        v-for="option in options"
                        :key="option.value"
                        :label="option.name"
                        @click="selectOption(option)"
            >
            </BaseButton>
        </div>
    </div>
</template>

<script>
import FilterButton from "@/components/ui/FilterButton.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default ({
    name: "BaseSelect",
    components: {BaseButton, FilterButton},
    props:{
        options:{
            type: Array,
            default(){
                return []
            }
        },
        selected:{
            type: String,
            default: ""
        }
    },
    data(){
        return{
            isVisible: false
        }
    },
    methods:{
        selectOption(option){
            this.$emit('select',option)
            this.isVisible = false
        },
        hideSelect(){
            this.isVisible = false
        }
    },
    mounted() {
        document.addEventListener('click',this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click',this.hideSelect)
    }

})
</script>


<style lang="scss">






</style>