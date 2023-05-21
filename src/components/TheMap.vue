<template>
    <MglMap
        id="mapContainer"
        class="near-events__map">
    </MglMap>
</template>

<script>
import mapboxgl from "mapbox-gl";

import {MglMap } from "mapbox-gl";
import {mapState} from "vuex";
export default {
    components: {
        MglMap,
    },
    name: "TheMap",
    data() {
        return {
            accessToken: "pk.eyJ1IjoiYmVucmlzZSIsImEiOiJjbGg5b3ZlNHIwOW1yM2ZscGcyZDVobGRmIn0.iaTfbUJkg0e8X6V2F4pyeA",

        };
    },
    computed: {
        ...mapState({
            nearEvents: (state) => state.nearEvents,
            categories: state => state.categories
        }),
        updatedEvents() {
            return this.nearEvents.map(event => {
                return {
                    ...event,
                    category: this.categories.find(category => category.id === event.category)
                };
            });
        },
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;

        const map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/benrise/clhvmskkx023s01pr6a4x5cad",
            center: [37.6174943, 55.7504461],
            zoom: 9,
            language: 'ru',
        });
        map.addControl(new mapboxgl.NavigationControl());
        this.updatedEvents.forEach((event) => {
            const popup = new mapboxgl.Popup({offset:25}).setText(event.name)
            const marker = new mapboxgl.Marker({ color: event.category.color, scale: 0.8 })
                .setPopup(popup)
                .setLngLat(event.coordinates)
                .addTo(map);
        });
        map.on('load', function () {
            map.resize();
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

.marker{
    background-image: url("public/images/geo-icon.png");
    background-size: cover;
    width: 25px;
    height: 36px;
    cursor: pointer;
}
</style>



