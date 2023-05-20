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
            language: 'ru'
        };
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;

        new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/benrise/clhvflyod025701pn3tlyfpb3",
            center: [37.6174943, 55.7504461],
            zoom: 9,

        });
    },
};
</script>
<style lang="scss">
.mapboxgl-ctrl{
    &-bottom-right{
        display: none;
    }
    &-bottom-left{
        display: none;
    }
}

</style>



