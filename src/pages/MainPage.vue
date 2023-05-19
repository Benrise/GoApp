<template>
    <div class="wrapper">

        <TheEventCategories />

        <TheSearchResult />

        <TheUpcomingEvents />

        <TheNearEvents />

        <TheBroadcast />

        <TheRecommendations />

    </div>
  </template>
  
<script>
import TheEventCategories from "@/components/blocks/TheEventCategories.vue";
import TheSearchResult from "@/components/blocks/TheSearchResult.vue";
import TheUpcomingEvents from "@/components/blocks/TheUpcomingEvents.vue";
import TheNearEvents from "@/components/blocks/TheNearEvents.vue";
import TheBroadcast from "@/components/blocks/TheBroadcast.vue";
import TheRecommendations from "@/components/blocks/TheRecommendations.vue";




export default {
    name: "MainPage",
    components: {TheRecommendations,
        TheBroadcast,
        TheNearEvents,
        TheUpcomingEvents,
        TheSearchResult,
        TheEventCategories}
};
</script>
<style>

</style>