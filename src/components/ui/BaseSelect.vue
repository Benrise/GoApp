

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
import {defineComponent} from 'vue'
import FilterButton from "@/components/ui/FilterButton.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
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
@import 'src/scss/style.scss';


.main-block__filter{
  position: relative;
  z-index: 10;
}

.select{

  &__options{
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 1px solid $fontColor;
    width: 100%;
    top: rem(48);
    border-radius: rem(12);
    background: white;
    padding: rem(12);
  }
  &__option{
    width: 100%;
    background: none;
    color: rgba(128, 0, 128, 0.5);
    border-radius: rem(8);
    font-weight: 500;
    padding: rem(12) rem(6);

    &:hover{
      color: rgba(128, 0, 128, 1);
      background: $bgColor;
    }

  }
}



</style>