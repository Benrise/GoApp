<template>
    <div>
        <swiper

            :navigation=" {
                nextEl: '.tickets__slider-btn-next',
                prevEl: '.tickets__slider-btn-prev'
            }"

            :pagination=" {
            el: '.tickets__slider-pagination',
                clickable: true,
                dynamicBullets: true,
            }"


            :keyboard=" {
                enabled: true,
                onlyInViewport: true,
            }"
            :breakpoints=" {
                280: {
                    slidesPerView: 1,
                },
                670: {
                    slidesPerView: 3
                },
                1100: {
                    slidesPerView: 4,
                },
            }"
            :modules="modules"
            :spaceBetween=24

            class="tickets__slider">
                <swiper-slide :virtualIndex="ticket.id" v-for="ticket in updatedTickets" :key="ticket.id" class="swiper-slide">
                    <TicketCard
                            :id="ticket.id"
                            :title="ticket.title"
                            :place="ticket.place"
                            :date="ticket.date"
                            :time="ticket.time"
                            :timeZone="ticket.timeZone"
                            :imgUrl="ticket.img"
                            :categoryName="ticket.category.name"
                            :categoryTitle="ticket.category.title"
                            :virtual="true"
                    />
                </swiper-slide>
        </swiper>
        <div class="tickets__slider-btn-next swiper-button-next"><img src="/images/slider-button.svg"
                                                                      alt="Слайдер кнопка вперед"></div>
        <div class="tickets__slider-btn-prev swiper-button-prev"><img src="/images/slider-button.svg"
                                                                      alt="Слайдер кнопка назад"></div>
        <div class="tickets__slider-pagination swiper-pagination"></div>
    </div>
</template>

<script>
import {Autoplay, FreeMode, Navigation, Pagination, Virtual} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import BaseButton from "@/components/ui/BaseButton.vue";
import TicketCard from "@/components/sliders/TicketCard.vue";
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    components:{
        TicketCard,
        BaseButton,
        Swiper,
        SwiperSlide,
        Virtual
    },
    data() {
        return {
            bonusInfo: [{
                userId: 1,
                bonusCardId: 1488228231014202013,
                bonusPoints: 1488,
                discountLevel: 1,
                name: 'Латыпов Артём Равилевич',
                phone: '89872857775',
                email: 'benrise_x@mail.ru',
                freeTicketPrice: 2000
            }]
        };
    },
    computed: {
        ...mapState({
            tickets: state => state.tickets,
            categories: state => state.categories
        }),
        updatedTickets() {
            return this.tickets.map(ticket => {
                return {
                    ...ticket,
                    category: this.categories.find(category => category.id === ticket.category)
                };
            });
        },
    },
    setup() {
        return {
            modules: [Autoplay, FreeMode, Navigation, Pagination, Virtual],
        };
    },
};
</script>

<style scoped>

</style>