<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__upper">
        <div class="main-block__info">
          <h2 class="main-block__title">Сейчас в прямом эфире</h2>
          <h3 class="main-block__subtitle">
            Прямые трансляции мероприятий и событий
          </h3>
        </div>
      </div>
      <div class="main-block__body">
        <div class="broadcast">
          <div class="broadcast__left">
            <BaseAccordion
                    v-for="broadcast in updatedColorBroadcasts"
                    :key="broadcast.category"
                    :categoryTitle="broadcast.category.title"
                    :itemsInCategory="broadcast.count"
                    :categoryItems="broadcast.items"
                    :categoryName="broadcast.category.name"
                    :broadcastUrl="broadcast.url"
                    @update-video-source="updateVideoSource"
            />
          </div>
          <div class="broadcast__right">
            <div class="broadcast__video">
              <video loop muted autoplay poster="" controls preload="metadata">
                <source type="video/webm" :src="videoSource"  @updateVideoSource="updateVideoSource"/>
                <source type="video/mp4" :src="videoSource" @updateVideoSource="updateVideoSource"/>
              </video>
            </div>
            <div class="broadcast__description">
              <div class="broadcast__heading">
                <div class="broadcast__heading-title">
                  Coachella Festifal 2023
                </div>
                <ul class="broadcast__heading-additional">
                  <li class="broadcast__heading-additional">New-York</li>
                  <li class="broadcast__heading-additional">18+</li>
                </ul>
              </div>
              <div class="broadcast__text">
                Coachella - одно из самых ожидаемых музыкальных событий года!
                Погрузитесь в атмосферу уникального музыкального фестиваля, не
                выходя из дома.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import BaseAccordion from "@/components/ui/BaseAccordion.vue";
import {mapState} from "vuex";
export default {
    components: {BaseAccordion},
    name: "TheBroadcast",
    data() {
        return {
            videoSource: "",
        };
    },
    computed: {
        ...mapState({
            activeBroadcasts: state => state.activeBroadcasts,
            categories: state => state.categories
        }),
        updatedColorBroadcasts() {
            return this.activeBroadcasts.map(broadcast => {
                return {
                    ...broadcast,
                    category: this.categories.find(category => category.id === broadcast.category)
                };
            });
        },
    },
    methods: {
        updateVideoSource(url) {
            console.log(url + " from parent");
            this.videoSource = url;
        }
    }


};
</script>
<style scoped>
</style>