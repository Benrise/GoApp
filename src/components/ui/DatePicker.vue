<template>
    <DatePicker aria-label="Datepicker" :placeholder="placeholderText" class="base-button_date-picker" v-model="date"/>
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

<style>
:root {

    /*General*/
    --dp-font-family: 'Inter','sans-serif';
    --dp-border-radius: 12px; /*Configurable border-radius*/
    --dp-cell-border-radius: 12px; /*Specific border radius for the calendar cell*/
    --dp-common-transition: all 0.1s ease-in; /*Generic transition applied on buttons and calendar cells*/

    /*Sizing*/
    --dp-button-heigh: 40px; /*Size for buttons in overlays*/
    --dp-month-year-row-height: 35px; /*Height of the month-year select row*/
    --dp-month-year-row-button-size: 35px; /*Specific height for the next/previous buttons*/
    --dp-button-icon-height: 20px; /*Icon sizing in buttons*/
    --dp-cell-size: 35px; /*Width and height of calendar cell*/
    --dp-cell-padding: 5px; /*Padding in the cell*/
    --dp-common-padding: 10px; /*Common padding used*/
    --dp-input-icon-padding: 35px; /*Padding on the left side of the input if icon is present*/
    --dp-input-padding: 7px 30px 7px 12px; /*Padding in the input*/
    --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
    --dp-action-buttons-padding: 2px 5px; /*Adjust padding for the action buttons in action row*/
    --dp-row-maring:  5px 0; /*Adjust the spacing between rows in the calendar*/
    --dp-calendar-header-cell-padding:  0.5rem; /*Adjust padding in calendar header cells*/
    --dp-two-calendars-spacing:  10px; /*Space between multiple calendars*/
    --dp-overlay-col-padding:  3px; /*Padding in the overlay column*/
    --dp-time-inc-dec-button-size:  32px; /*Sizing for arrow buttons in the time picker*/
    --dp-menu-padding: 6px 8px; /*Menu padding*/

    /*Font sizes*/
    --dp-font-size: 1rem; /*Default font-size*/
    --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
    --dp-time-font-size: 0.8rem; /*Font size in the time picker*/

    /*Transitions*/
    --dp-animation-duration: 0.3s; /*Transition duration*/
    --dp-menu-appear-transition-timing: cubic-bezier(.4, 0, 1, 1); /*Timing on menu appear animation*/
    --dp-transition-timing: ease-out; /*Timing on slide animations*/
}
.dp__theme_light {
    --dp-background-color: #ffffff;
    --dp-text-color: #a43ea4;
    --dp-hover-color: #fff9ff;
    --dp-hover-text-color: #820083;
    --dp-hover-icon-color: #820083;
    --dp-primary-color: #a43ea4;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: rgba(128, 0, 128, 0.5);
    --dp-border-color: #820083;
    --dp-menu-border-color: #a43ea4;
    --dp-border-color-hover: #a43ea4;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #820083;
    --dp-success-color: #00CA8D;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #820083;
    --dp-danger-color: #ff5341;
    --dp-highlight-color: rgba(25, 118, 210, 0.1);
}
</style>