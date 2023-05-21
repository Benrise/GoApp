<template>
    <div class="tabbar__section section" v-show="title == selectedTitle">
        <slot />
    </div>
</template>

<script>
import { inject } from 'vue'


export default ({
    name: "BaseTab",
    props: ['title'],

    setup(){
        const selectedTitle = inject("selectedTitle")
        return {
            selectedTitle
        }
    }



})
</script>

<style scoped>

</style>