<template>

    <div class ="wrapper">
        <TheHeader />

        <main class="main">
            <router-view></router-view>
        </main>


        <TheFooter />
    </div>
</template>

<script lang="js">

import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'


export default {
    name: 'App',
    components:{
        TheHeader,
        TheFooter,
    },
}
</script>

<style lang="scss">
</style>
