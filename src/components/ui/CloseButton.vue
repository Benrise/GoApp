<script>
import {defineComponent} from 'vue'
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
    name: "CloseButton",
    components: {BaseButton}
})
</script>

<template>
    <BaseButton aria-label="Close" class="_icon-xmark base-button_close" ></BaseButton>
</template>

<style lang="scss">


</style>