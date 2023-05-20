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
                    slidesPerView: 1
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
                <swiper-slide v-for="ticket in tickets" :key="ticket.id" class="swiper-slide">
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
                    />
                </swiper-slide>
        </swiper>
        <div class="tickets__slider-btn-next swiper-button-next"><img src="public/images/slider-button.svg"
                                                                      alt="Слайдер кнопка вперед"></div>
        <div class="tickets__slider-btn-prev swiper-button-prev"><img src="public/images/slider-button.svg"
                                                                      alt="Слайдер кнопка назад"></div>
        <div class="tickets__slider-pagination swiper-pagination"></div>
    </div>
</template>

<script>
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import BaseButton from "@/components/ui/BaseButton.vue";
import TicketCard from "@/components/sliders/TicketCard.vue";

export default {
    components:{
        TicketCard,
        BaseButton,
      Swiper, SwiperSlide
    },
    data() {
        return {
            categories: [
                {
                    id: 0,
                    title: "Путешествия",
                    name: "travel"
                },
                {
                    id: 1,
                    title: "Здоровье и красота",
                    name: "healthAndBeauty"
                },
                {
                    id: 2,
                    title: "Фильмы",
                    name: "movie"
                },
                {
                    id: 3,
                    title: "Спорт и фитнес",
                    name: "sportAndFitness"
                },
                {
                    id: 4,
                    title: "Музыка",
                    name: "music"
                },
                {
                    id: 5,
                    title: "Концерт",
                    name: "concert"
                },
                {
                    id: 6,
                    title: "Комедия",
                    name: "comedy"
                },
                {
                    id: 7,
                    title: "Вечеринка",
                    name: "party"
                },
                {
                    id: 8,
                    title: "Театр",
                    name: "theater"
                },
                {
                    id:9,
                    title: "Культура",
                    name: "art"
                }
            ],
            events: [
                {
                    id: 1,
                    day: "10",
                    month: "мая",
                    name: "Yoga Material",
                    rating: 7.9,
                    location: "Москва",
                    price: 'low',
                    img: 'public/images/events/yoga-promo.jpg',
                    category: 3
                },
                {
                    id: 2,
                    day: "23",
                    month: "мая",
                    name: "Человек-павук",
                    rating: 7.7,
                    location: "Москва",
                    price: 'avg',
                    img: 'public/images/events/spider-man-promo.jpg',
                    category: 2
                },
                {
                    id: 3,
                    day: "12",
                    month: "мая",
                    name: "Come Together",
                    rating: 9.9,
                    location: "Москва",
                    price: 'high',
                    img: 'public/images/events/the-beatles-promo.jpg',
                    category: 4
                },
                {
                    id: 4,
                    day: "31",
                    month: "мая",
                    name: "ART - Цветная полоса",
                    rating: 8,
                    location: "Реутов",
                    price: 'free',
                    img: 'public/images/events/art-promo.jpg',
                    category: 9
                },

            ],
            tickets: [
                {
                    id: 1,
                    title: 'Человек-павук',
                    place: 'ТРЦ "Комумбус", Киломакс',
                    date: '19.12.2023',
                    time: '13:00',
                    timeZone: 'МСК',
                    img: 'public/images/tickets/SpiderMan.jpg',
                    category: 2,
                    status: true
                },
                {
                    id: 2,
                    title: 'Зимние игры',
                    place: 'Спортивный комплекс "Аура"',
                    date: '19.12.2023',
                    time: '10:30',
                    timeZone: 'МСК',
                    img: 'public/images/tickets/WinterSports.jpg',
                    category: 3,
                    status: true
                },

                {
                    id: 3,
                    title: 'Стены Газет',
                    place: 'ТРЦ "Галерея"',
                    date: '19.07.2023',
                    time: '16:20',
                    timeZone: 'МСК',
                    img: 'public/images/tickets/NewspapersWall.jpg',
                    category: 9,
                    status: true
                },
                {
                    id: 3,
                    title: 'Акция в поддержку молока',
                    place: 'Красная Поляна',
                    date: '03.09.2023',
                    time: '16:20',
                    timeZone: 'МСК',
                    img: 'public/images/tickets/Milk.jpg',
                    category: 9,
                    status: true
                },
                {
                    id: 3,
                    title: 'Star Boy Tour',
                    place: 'ВТБ Арена',
                    date: '03.09.2013',
                    time: '16:20',
                    timeZone: 'МСК',
                    img: 'public/images/tickets/Starboy.jpg',
                    category: 5,
                    status: false
                }
            ],
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
        updatedTickets() {
            return this.tickets.map(ticket => {
                return {
                    ...ticket,
                    category: this.categories.find(category => category.id === ticket.category)
                };
            });
        }
    },
    created() {
        this.tickets = this.updatedTickets;
    },
    setup() {
        return {
            modules: [Autoplay, FreeMode, Navigation, Pagination],
        };
    },
};
</script>

<style scoped>

</style>