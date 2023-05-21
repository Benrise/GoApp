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
    },
    getters: {
        getTickets(state) {
            return state.tickets;
        },
    }
})