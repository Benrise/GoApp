<template>
  <div class="profile__tabs tabbar">
        <nav class="tabbar__buttons">
            <button
                    v-for="title in tabTitles"
                    :key="title" class="tabbar__button"
                    data-section-id="general"
                    @click="selectedTitle = title"
                    :class="{tabbar__button_active: title == selectedTitle}"
            >
                {{title}}
            </button>
        </nav>
      <slot />
  </div>
</template>

<script>
import {ref, provide} from 'vue'

export default ({
    name: "BaseTabbar",
    setup (props, {slots}){
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide("selectedTitle", selectedTitle)
        return {
            selectedTitle,
            tabTitles,
        }
    }
})
</script>

<style scoped>

</style>