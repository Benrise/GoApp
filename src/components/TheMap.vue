<template>
    <MglMap
        id="mapContainer"
        class="near-events__map">
        <MglAttributionControl />
        <MglNavigationControl position="top-right" />
        <MglGeolocateControl position="top-right" />
        <MglNavigationControl position="top-right" />
        <MglGeolocateControl position="top-right" />
        <MglScaleControl />
    </MglMap>
</template>

<script>
import { ref } from "vue";
import mapboxgl from "mapbox-gl";
import {
    MglMap,
    MglAttributionControl,
    MglNavigationControl,
    MglGeolocateControl,
    MglFullscreenControl,
    MglScaleControl
} from "mapbox-gl";
export default {
    components: {
        MglMap,
        MglAttributionControl,
        MglNavigationControl,
        MglGeolocateControl,
        MglFullscreenControl,
        MglScaleControl,
    },
    name: "TheMap",
    data() {
        return {
            accessToken: "pk.eyJ1IjoiYmVucmlzZSIsImEiOiJjbGg5b3ZlNHIwOW1yM2ZscGcyZDVobGRmIn0.iaTfbUJkg0e8X6V2F4pyeA",

        };
    },

    mounted() {
        mapboxgl.accessToken = this.accessToken;

        const map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/benrise/clhvmskkx023s01pr6a4x5cad",
            center: [37.6174943, 55.7504461],
            zoom: 9,
            language: 'ru',
            trackUserLocation: true,
            showCompass: true,
            showZoom: true,
        });
        map.on('load', function () {
            map.resize();
        });
    },
    setup(){
        const coords = ref(null);
        const fetchCoords = ref(null);
        const geoMarker = ref(null);
    },
    methods(){
        getGeoLocation()
        {

        }
    }
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



