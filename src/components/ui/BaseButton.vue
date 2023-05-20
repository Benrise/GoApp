<script>
export default {
    name: "BaseButton",
    props:{
      label:{
          type: String,
          default: "Кнопка"

      },
      disabled:{
          type: Boolean,
          default: false
      }
    },
    computed:{
      classModificator(){
          return{
              "main-block__button_disabled": this.disabled
          }
      }
    },
    methods:{
        onClick(){
            this.$emit('click');
        }
    },

}

</script>

<template>
    <button :class="classModificator" type="button" @click="onClick" class="main-block__button">{{label}}</button>
</template>
