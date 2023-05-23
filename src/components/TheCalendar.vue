<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {mapState} from "vuex";
import BaseModal from "@/components/ui/modal/BaseModal.vue";
import SliderCard from "@/components/sliders/SliderCard.vue";
import BackgroundBlackout from "@/components/ui/BackgroundBlackout.vue";

export default defineComponent({
    components: {
        BackgroundBlackout,
        SliderCard,
        BaseModal,
        FullCalendar,
    },
    computed: {
        ...mapState({
            calendarEvents: (state) => state.calendarEvents,
        }),
    },
    data() {
        return {
            calendarOptions: {
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin
                ],
                initialView: 'dayGridMonth',
                // initialEvents: INITIAL_EVENTS,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                locale: 'ru',
                buttonText: {
                    today:    'сегодня',
                    month:    'месяц',
                    week:     'неделя',
                    day:      'день',
                    list:     'список'
                },
                headerToolbar: {
                    start: 'today',
                    center: 'title',
                    end: 'next'
                },
                titleFormat: {
                    year: 'numeric',
                    month: 'long',
                },
                events: this.calendarEvents,
                eventClick: this.handleEventClick,

            },
            currentEvents: [],
            modalVisible: false,
            selectedEvent: null,
        }
    },
    watch: {
        updatedEvents: {
            immediate: true,
            handler() {
                this.calendarOptions.events = this.calendarEvents
            },
        },
    },
    methods: {
        handleEventClick(info) {
            this.selectedEvent = info.event
            this.modalVisible = true
            info.jsEvent.preventDefault();
            this.handleEventClick(info);
        },
        formatDate(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            return new Date(date).toLocaleDateString('ru-RU', options);
        },
    },
})

</script>

<template>
    <div class='demo-app-main'>
        <FullCalendar
                class='demo-app-calendar'
                :options='calendarOptions'
        ></FullCalendar>
        <transition name="fade">
            <BaseModal :title="selectedEvent ? selectedEvent.title : ''"  :show="modalVisible" @update:show="modalVisible = $event">
                <p v-if="selectedEvent">{{ formatDate(selectedEvent.start) }}</p>
                <img style="border-radius: 12px" :alt="selectedEvent.title" :src="calendarEvents[selectedEvent.id-1].img">
                <a class="menu__link" :href="selectedEvent.start.url">Подробнее</a>
            </BaseModal>
        </transition>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>


