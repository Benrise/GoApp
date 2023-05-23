<template>
    <main class="main">
        <div class="wrapper">
            <section class="main-block ">
                <div class="main-block__container _heading-block">
                    <div class="main-block__upper">
                        <div class="main-block__info">
                            <h2 class="main-block__title">Календарь событий и мероприятий</h2>
                            <h3 class="main-block__subtitle">
                                Мероприятия месяца
                            </h3>
                        </div>
                    </div>
                    <div class="main-block__body">
                        <TheCalendar></TheCalendar>
                    </div>
                </div>
            </section>
        </div>
    </main>

</template>

<script>

import TheCalendar from "@/components/TheCalendar.vue";

export default {
    components: {TheCalendar}

};

</script>

<style scoped>

</style>
<script setup>
</script>