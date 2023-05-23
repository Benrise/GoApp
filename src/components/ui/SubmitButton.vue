<template>
    <BaseButton aria-label="Search" class="base-button_submit" @click="submit"></BaseButton>
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

</style>