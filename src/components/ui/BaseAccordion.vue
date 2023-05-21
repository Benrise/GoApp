<script>
import { Collapse} from "vue-collapsed";

export default ({
    components:{
        Collapse
    },
    data(){
        return{
            isOpen: false
        }
    },
    name: "BaseAccordion",
    props: {
        categoryTitle: String,
        itemsInCategory: Number,
        categoryItems: Array,
        categoryName: String,
        broadcastUrl: Object
    },
    methods:{
        handleCollapse(){
            this.isOpen = !this.isOpen
        },
        updateVideoSource(broadcastUrl) {
            console.log(broadcastUrl + "from child")
            this.$emit("update-video-source", broadcastUrl);
        }
    }
})
</script>

<template>
    <div class="broadcast__spoller" data-spollers data-one-spoller>
        <div class="broadcast__spoller-item" >
                <button @click="handleCollapse"
                        type="button" class="broadcast__title collapse">
                    <div
                        class="broadcast__category broadcast__category_no-fill">{{ categoryTitle }}
                    </div>
                    <div class="broadcast__count _icon-arrow" :class="{ 'arrow-icon--down': isOpen, 'arrow-icon--right': !isOpen }">{{ itemsInCategory }}</div>
                </button>
            <Collapse class="broadcast__items" :when="isOpen">
                    <div class="broadcast__item-wrapper">
                        <button v-for="item in categoryItems"
                                :key="item.title"
                                class="broadcast__item category"
                                @click="updateVideoSource(item.url)"
                                :class="`_category-${categoryName}`"
                        >{{ item.title }}
                        </button>
                    </div>
            </Collapse>

        </div>
    </div>
</template>

<style lang="scss">
.collapse{
    transition: height var(--vc-auto-duration) cubic-bezier(0.3,0,6,1);
}
.arrow-icon--down::after {
    transform: rotate(90deg); /* Поворот стрелки вниз */
}

.arrow-icon--right::after {
    transform: rotate(-90deg); /* Поворот стрелки вправо */
}

</style>