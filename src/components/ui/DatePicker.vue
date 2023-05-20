<template>
    <DatePicker :placeholder="placeholderText" class="date-picker" v-model="date"></DatePicker>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: { DatePicker },
    data() {
        return {
            date: null,
            placeholderText: 'Когда и во сколько?'
        };
    }
}
</script>

<style lang="scss">

@import "src/scss/style.scss";


:root{
    .date-picker{
        max-width: rem(250);
        ::placeholder {
            all: unset;
            color: $secondaryFontColor;
            font-family: 'Inter',sans-serif;
            @include adaptiveValue('font-size',16,12);
            font-weight: 600;
            white-space: nowrap;
        }
    }
}
</style>