<template>
    <DatePicker :placeholder="placeholderText" class="base-button_date-picker" v-model="date"/>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
    components: {BaseButton, DatePicker },
    data() {
        return {
            date: null,
            placeholderText: 'Когда и во сколько?'
        };
    }
}
</script>

<style lang="scss">

</style>