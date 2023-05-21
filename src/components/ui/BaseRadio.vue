<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "BaseRadio"
})
</script>

<template>
    <div class="main-block__radio">
        <div class="radio" >
            <input type="radio" name="select" key="active" id="active" checked>
            <input type="radio" name="select" key="archive" id="archive">
            <label for="active" class="option active">
                <div class="dot"></div>
                <span>Активные</span>
            </label>
            <label for="archive" class="option archive">
                <div class="dot"></div>
                <span>Архив</span>
            </label>
        </div>
    </div>
</template>

<style scoped>

</style>