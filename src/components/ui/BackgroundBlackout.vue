<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "BackgroundBlackout"
})
</script>

<template>
    <div class="background-blackout">
        <slot></slot>
    </div>
</template>

<style>
.background-blackout{
    z-index: 99;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    width: 100%;
    position: fixed;
}
</style>