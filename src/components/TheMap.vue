<template>
    <div id="mapContainer" class="near-events__map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
    name: "TheMap",
    data() {
        return {
            accessToken: "pk.eyJ1IjoiYmVucmlzZSIsImEiOiJjbGg5b3ZlNHIwOW1yM2ZscGcyZDVobGRmIn0.iaTfbUJkg0e8X6V2F4pyeA",
        };
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;

        new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [103.811279, 1.345399],
            zoom: 12,
            maxBounds: [
                [103.6, 1.1704753],
                [104.1, 1.4754753],
            ],
        });
    },
};
</script>
<style lang="scss" scoped>

</style>



