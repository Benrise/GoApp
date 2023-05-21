<script>
export default {
    name: "BaseButton",
    props:{
      label:{
          type: String,
          default: ""

      },
      disabled:{
          type: Boolean,
          default: false
      }
    },
    computed:{
      classModificator(){
          return{
              "main-block__button_disabled": this.disabled,
          }
      }
    }

}

</script>

<template>
    <button :class="classModificator" type="button" class="base-button">{{label}}</button>
</template>

<style lang="scss">

</style>
