import {createStore} from "vuex";

export default createStore({
    state:{
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
                status: false
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
                status: false
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

    },
    mutations: {
        updateTickets(state, tickets) {
            state.tickets = tickets;
        }
    },

})