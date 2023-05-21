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
                name: "travel",
                color: "#8da0d1"
            },
            {
                id: 1,
                title: "Здоровье и красота",
                name: "healthAndBeauty",
                color: "#ff0000"
            },
            {
                id: 2,
                title: "Фильмы",
                name: "movie",
                color: "#800080"
            },
            {
                id: 3,
                title: "Спорт и фитнес",
                name: "sportAndFitness",
                color: "#00ca8d"
            },
            {
                id: 4,
                title: "Музыка",
                name: "music",
                color: "#0bb8ad"
            },
            {
                id: 5,
                title: "Концерт",
                name: "concert",
                color: "#001d82"
            },
            {
                id: 6,
                title: "Комедия",
                name: "comedy",
                color: "#ffa500"
            },
            {
                id: 7,
                title: "Вечеринка",
                name: "party",
                color: "#5200ff"
            },
            {
                id: 8,
                title: "Театр",
                name: "theater",
                color: "#823e00"
            },
            {
                id:9,
                title: "Культура",
                name: "art",
                color: "#ff6321"
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
        nearEvents: [
            {
                id: 1,
                day: "10",
                month: "мая",
                name: "Yoga Material",
                rating: 7.9,
                location: "Москва",
                price: 'low',
                img: 'public/images/events/yoga-promo.jpg',
                category: 3,
                coordinates: [37.59502, 55.743561]
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
                category: 2,
                coordinates: [37.612259, 55.752229]
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
                category: 4,
                coordinates: [37.604, 55.7522]
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
                category: 9,
                coordinates: [ 37.601638, 55.7595]
            },
            {
                id: 5,
                day: "18",
                month: "июня",
                name: "Кино на открытом воздухе",
                rating: 8.5,
                location: "Москва",
                price: "avg",
                img: "public/images/events/outdoor-cinema-promo.jpg",
                category: 2,
                coordinates: [37.578952, 55.763532]
            },
            {
                id: 6,
                day: "5",
                month: "июля",
                name: "Выставка современного искусства",
                rating: 7.8,
                location: "Москва",
                price: "low",
                img: "public/images/events/art-exhibition-promo.jpg",
                category: 9,
                coordinates: [37.659198, 55.758108]
            },
            {
                id: 7,
                day: "22",
                month: "июля",
                name: "Фестиваль уличного питания",
                rating: 9.2,
                location: "Москва",
                price: "avg",
                img: "public/images/events/street-food-festival-promo.jpg",
                category: 7,
                coordinates: [37.632611, 55.718355]
            },
            {
                id: 8,
                day: "10",
                month: "августа",
                name: "Концерт рок-группы",
                rating: 8.9,
                location: "Москва",
                price: "high",
                img: "public/images/events/rock-concert-promo.jpg",
                category: 5,
                coordinates: [37.553312, 55.745801]
            },
            {
                id: 9,
                day: "28",
                month: "августа",
                name: "Театральное представление",
                rating: 7.6,
                location: "Москва",
                price: "avg",
                img: "public/images/events/theatre-performance-promo.jpg",
                category: 8,
                coordinates: [37.512738, 55.731634]
            },
            {
                id: 10,
                day: "15",
                month: "сентября",
                name: "Выставка фотографии",
                rating: 7.4,
                location: "Москва",
                price: "low",
                img: "public/images/events/photography-exhibition-promo.jpg",
                category: 9,
                coordinates: [37.574905, 55.726860]
            },
            {
                id: 11,
                day: "3",
                month: "октября",
                name: "Концерт классической музыки",
                rating: 9.1,
                location: "Москва",
                price: "high",
                img: "public/images/events/classical-music-concert-promo.jpg",
                category: 4,
                coordinates: [37.615620, 55.749234]
            },
            {
                id: 12,
                day: "20",
                month: "ноября",
                name: "Фестиваль кино",
                rating: 8.3,
                location: "Москва",
                price: "avg",
                img: "public/images/events/film-festival-promo.jpg",
                category: 2,
                coordinates: [37.589617, 55.771330]
            },
            {
                id: 13,
                day: "8",
                month: "декабря",
                name: "Выставка скульптур",
                rating: 7.7,
                location: "Москва",
                price: "low",
                img: "public/images/events/sculpture-exhibition-promo.jpg",
                category: 9,
                coordinates: [37.605349, 55.726049]
            },
            {
                id: 14,
                day: "25",
                month: "декабря",
                name: "Новогодний музыкальный фестиваль",
                rating: 9.5,
                location: "Москва",
                price: "high",
                img: "public/images/events/new-year-music-festival-promo.jpg",
                category: 5,
                coordinates: [37.645428, 55.776591]
            },
            {
                id: 15,
                day: "10",
                month: "января",
                name: "Выставка современного искусства",
                rating: 8.2,
                location: "Москва",
                price: "avg",
                img: "public/images/events/modern-art-exhibition-promo.jpg",
                category: 9,
                coordinates: [37.599812, 55.759232]
            },
            {
                id: 16,
                day: "18",
                month: "февраля",
                name: "Концерт рок-группы",
                rating: 7.8,
                location: "Москва",
                price: "high",
                img: "public/images/events/rock-band-concert-promo.jpg",
                category: 5,
                coordinates: [37.622635, 55.747326]
            },
            {
                id: 17,
                day: "5",
                month: "марта",
                name: "Театральное представление",
                rating: 9.3,
                location: "Москва",
                price: "avg",
                img: "public/images/events/theater-performance-promo.jpg",
                category: 8,
                coordinates: [37.613645, 55.759797]
            },
            {
                id: 18,
                day: "12",
                month: "апреля",
                name: "Выставка цветов",
                rating: 8.6,
                location: "Москва",
                price: "low",
                img: "public/images/events/flower-exhibition-promo.jpg",
                category: 9,
                coordinates: [37.573173, 55.750867]
            },
            {
                id: 19,
                day: "20",
                month: "мая",
                name: "Концерт джазовой музыки",
                rating: 9.7,
                location: "Москва",
                price: "high",
                img: "public/images/events/jazz-music-concert-promo.jpg",
                category: 4,
                coordinates: [37.607852, 55.743519]
            }

        ],


    },
    mutations: {
        updateTickets(state, tickets) {
            state.tickets = tickets;
        }
    },

})