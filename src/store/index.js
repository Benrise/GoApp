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
                img: '/images/tickets/SpiderMan.png',
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
                img: '/images/tickets/WinterSports.png',
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
                img: '/images/tickets/NewspapersWall.png',
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
                img: '/images/tickets/Milk.png',
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
                img: '/images/tickets/starboy-promo.png',
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
                title: "Здоровье",
                name: "health",
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
            },
            {
                id:10,
                title: "Природа",
                name: "nature",
                color: "#008000"
            },
            {
                id:11,
                title: "Квесты",
                name: "quests",
                color: "#800000"
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
                img: '/images/events/yoga-promo.webp',
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
                img: '/images/events/spider-man-promo.webp',
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
                img: '/images/events/the-beatles-promo.webp',
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
                img: '/images/events/art-promo.webp',
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
                img: '/images/events/yoga-promo.webp',
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
                img: '/images/events/spider-man-promo.webp',
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
                img: '/images/events/the-beatles-promo.webp',
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
                img: '/images/events/art-promo.webp',
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
                img: "/images/events/outdoor-cinema-promo.webp",
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
                img: "/images/events/art-exhibition-promo.webp",
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
                img: "/images/events/street-food-festival-promo.webp",
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
                img: "/images/events/rock-concert-promo.webp",
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
                img: "/images/events/theatre-performance-promo.webp",
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
                img: "/images/events/photography-exhibition-promo.webp",
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
                img: "/images/events/classical-music-concert-promo.webp",
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
                img: "/images/events/film-festival-promo.webp",
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
                img: "/images/events/sculpture-exhibition-promo.webp",
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
                img: "/images/events/new-year-music-festival-promo.webp",
                category: 4,
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
                img: "/images/events/modern-art-exhibition-promo.webp",
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
                img: "/images/events/rock-band-concert-promo.webp",
                category: 4,
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
                img: "/images/events/theater-performance-promo.webp",
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
                img: "/images/events/flower-exhibition-promo.webp",
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
                img: "/images/events/jazz-music-concert-promo.webp",
                category: 4,
                coordinates: [37.607852, 55.743519]
            },
            {
                id: 20,
                day: "3",
                month: "июня",
                name: "Выставка современного искусства",
                rating: 8.9,
                location: "Москва",
                price: "avg",
                img: "/images/events/modern-art-exhibition-promo.webp",
                category: 1,
                coordinates: [37.601095, 55.770239]
            },
            {
                id: 21,
                day: "15",
                month: "июля",
                name: "Концерт классической музыки",
                rating: 9.5,
                location: "Москва",
                price: "high",
                img: "/images/events/classical-music-concert-promo.webp",
                category: 4,
                coordinates: [37.599533, 55.769687]
            },
            {
                id: 22,
                day: "28",
                month: "августа",
                name: "Танцевальное шоу",
                rating: 7.2,
                location: "Москва",
                price: "low",
                img: "/images/events/dance-show-promo.webp",
                category: 1,
                coordinates: [37.594215, 55.757518]
            },
            {
                id: 23,
                day: "10",
                month: "сентября",
                name: "Концерт поп-исполнителя",
                rating: 8.3,
                location: "Москва",
                price: "avg",
                img: "/images/events/pop-artist-concert-promo.webp",
                category: 5,
                coordinates: [37.612911, 55.740953]
            },
            {
                id: 24,
                day: "22",
                month: "октября",
                name: "Фестиваль кулинарии",
                rating: 9.1,
                location: "Москва",
                price: "avg",
                img: "/images/events/culinary-festival-promo.webp",
                category: 1,
                coordinates: [37.625145, 55.736993]
            },
            {
                id: 25,
                day: "5",
                month: "ноября",
                name: "Выставка фотографии",
                rating: 8.7,
                location: "Москва",
                price: "low",
                img: "/images/events/photography-exhibition-promo.webp",
                category: 2,
                coordinates: [37.416560, 55.782423]
            },
            {
                id: 26,
                day: "18",
                month: "декабря",
                name: "Концерт хоровой музыки",
                rating: 9.4,
                location: "Москва",
                price: "avg",
                img: "/images/events/choir-music-concert-promo.webp",
                category: 4,
                coordinates: [37.438650, 55.780358]
            },
            {
                id: 27,
                day: "10",
                month: "января",
                name: "Театральное представление",
                rating: 8.5,
                location: "Москва",
                price: "high",
                img: "/images/events/theater-performance-promo.webp",
                category: 2,
                coordinates: [37.486959, 55.777894]
            },
            {
                id: 28,
                day: "22",
                month: "февраля",
                name: "Выставка скульптур",
                rating: 8.2,
                location: "Москва",
                price: "avg",
                img: "/images/events/sculpture-exhibition-promo.webp",
                category: 4,
                coordinates: [37.524195, 55.760628]
            },
            {
                id: 29,
                day: "7",
                month: "марта",
                name: "Концерт электронной музыки",
                rating: 7.9,
                location: "Москва",
                price: "avg",
                img: "/images/events/electronic-music-concert-promo.webp",
                category: 4,
                coordinates: [37.554650, 55.734924]
            },

            {
                id: 30,
                day: "15",
                month: "апреля",
                name: "Фестиваль комедийного кино",
                rating: 9.0,
                location: "Москва",
                price: "high",
                img: "/images/events/comedy-film-festival-promo.webp",
                category: 4,
                coordinates: [37.555670, 55.681119]
            },
            {
                id: 31,
                day: "28",
                month: "мая",
                name: "Выставка исторических артефактов",
                rating: 9.6,
                location: "Москва",
                price: "avg",
                img: "/images/events/historical-artifacts-exhibition-promo.webp",
                category: 3,
                coordinates: [37.602573, 55.665523]
            },
            {
                id: 32,
                day: "10",
                month: "июня",
                name: "Концерт рэп-исполнителя",
                rating: 8.8,
                location: "Москва",
                price: "avg",
                img: "/images/events/rap-artist-concert-promo.webp",
                category: 5,
                coordinates: [37.641832, 55.672297]
            },
            {
                id: 33,
                day: "22",
                month: "июля",
                name: "Танцевальный флешмоб",
                rating: 7.5,
                location: "Москва",
                price: "low",
                img: "/images/events/dance-flashmob-promo.webp",
                category: 2,
                coordinates: [37.672494, 55.692981]
            },
            {
                id: 34,
                day: "5",
                month: "августа",
                name: "Выставка моды",
                rating: 8.3,
                location: "Москва",
                price: "avg",
                img: "/images/events/fashion-exhibition-promo.webp",
                category: 1,
                coordinates: [37.706374, 55.709521]
            },
            {
                id: 40,
                day: "22",
                month: "января",
                name: "Кинофестиваль",
                rating: 9.1,
                location: "Москва",
                price: "avg",
                img: "/images/events/film-festival-promo.webp",
                category: 2,
                coordinates: [37.610762, 55.625122]
            },
            {
                id: 41,
                day: "5",
                month: "февраля",
                name: "Фитнес-марафон",
                rating: 8.9,
                location: "Москва",
                price: "low",
                img: "/images/events/fitness-marathon-promo.webp",
                category: 3,
                coordinates: [37.613100, 55.629870]
            },
            {
                id: 42,
                day: "18",
                month: "марта",
                name: "Концерт классической музыки",
                rating: 9.7,
                location: "Москва",
                price: "high",
                img: "/images/events/classical-music-concert-promo.webp",
                category: 4,
                coordinates: [37.617260, 55.632618]
            },
            {
                id: 43,
                day: "3",
                month: "апреля",
                name: "Шоу стендап-комедии",
                rating: 8.4,
                location: "Москва",
                price: "avg",
                img: "/images/events/standup-comedy-show-promo.webp",
                category: 6,
                coordinates: [37.621303, 55.637339]
            },
            {
                id: 44,
                day: "15",
                month: "мая",
                name: "Вечеринка в стиле 80-х",
                rating: 7.8,
                location: "Москва",
                price: "high",
                img: "/images/events/80s-party-promo.webp",
                category: 7,
                coordinates: [37.625200, 55.641541]
            },

            {
                id: 45,
                day: "28",
                month: "мая",
                name: "Танцевальный фестиваль",
                rating: 8.7,
                location: "Москва",
                price: "avg",
                img: "/images/events/dance-festival-promo.webp",
                category: 9,
                coordinates: [37.615866, 55.654872]
            },
            {
                id: 46,
                day: "10",
                month: "июня",
                name: "Концерт рэп-исполнителя",
                rating: 9.3,
                location: "Москва",
                price: "high",
                img: "/images/events/rap-artist-concert-promo.webp",
                category: 5,
                coordinates: [37.612956, 55.660820]
            },
            {
                id: 47,
                day: "22",
                month: "июля",
                name: "Выставка современного искусства",
                rating: 9.6,
                location: "Москва",
                price: "avg",
                img: "/images/events/modern-art-exhibition-promo.webp",
                category: 9,
                coordinates: [37.608889, 55.668736]
            },
            {
                id: 48,
                day: "5",
                month: "августа",
                name: "Концерт джазовой музыки",
                rating: 8.8,
                location: "Москва",
                price: "avg",
                img: "/images/events/jazz-music-concert-promo.webp",
                category: 4,
                coordinates: [37.604231, 55.678094]
            },
            {
                id: 49,
                day: "18",
                month: "августа",
                name: "Театральное представление",
                rating: 8.5,
                location: "Москва",
                price: "high",
                img: "/images/events/theater-performance-promo.webp",
                category: 8,
                coordinates: [37.600548, 55.687382]
            },

            {
                id: 50,
                day: "30",
                month: "августа",
                name: "Выставка фотографии",
                rating: 9.2,
                location: "Москва",
                price: "low",
                img: "/images/events/photography-exhibition-promo.webp",
                category: 9,
                coordinates: [37.585459, 55.778269]
            },
            {
                id: 51,
                day: "12",
                month: "сентября",
                name: "Концерт поп-группы",
                rating: 8.9,
                location: "Москва",
                price: "high",
                img: "/images/events/pop-band-concert-promo.webp",
                category: 5,
                coordinates: [37.582282, 55.772491]
            },
            {
                id: 52,
                day: "25",
                month: "октября",
                name: "Танцевальная вечеринка",
                rating: 7.6,
                location: "Москва",
                price: "avg",
                img: "/images/events/dance-party-promo.webp",
                category: 7,
                coordinates: [37.578003, 55.766592]
            },
            {
                id: 53,
                day: "7",
                month: "ноября",
                name: "Выставка скульптуры",
                rating: 8.3,
                location: "Москва",
                price: "low",
                img: "/images/events/sculpture-exhibition-promo.webp",
                category: 9,
                coordinates: [37.573723, 55.760574]
            },
            {
                id: 54,
                day: "20",
                month: "декабря",
                name: "Концерт классической музыки",
                rating: 9.7,
                location: "Москва",
                price: "avg",
                img: "/images/events/classical-music-concert-promo.webp",
                category: 4,
                coordinates: [37.569335, 55.754440]
            },

            {
                id: 55,
                day: "2",
                month: "января",
                name: "Концерт рок-группы",
                rating: 9.0,
                location: "Москва",
                price: "high",
                img: "/images/events/rock-band-concert-promo.webp",
                category: 5,
                coordinates: [37.646677, 55.884390]
            },
            {
                id: 56,
                day: "15",
                month: "февраля",
                name: "Выставка живописи",
                rating: 8.8,
                location: "Москва",
                price: "avg",
                img: "/images/events/painting-exhibition-promo.webp",
                category: 9,
                coordinates: [37.641813, 55.879679]
            },
            {
                id: 57,
                day: "28",
                month: "марта",
                name: "Концерт электронной музыки",
                rating: 9.4,
                location: "Москва",
                price: "high",
                img: "/images/events/electronic-music-concert-promo.webp",
                category: 4,
                coordinates: [37.636939, 55.874958]
            },
            {
                id: 58,
                day: "10",
                month: "апреля",
                name: "Театральное представление",
                rating: 8.6,
                location: "Москва",
                price: "avg",
                img: "/images/events/theater-performance-promo.webp",
                category: 8,
                coordinates: [37.632070, 55.870211]
            },
            {
                id: 59,
                day: "23",
                month: "мая",
                name: "Концерт джазовой музыки",
                rating: 9.7,
                location: "Москва",
                price: "high",
                img: "/images/events/jazz-music-concert-promo.webp",
                category: 4,
                coordinates: [37.627205, 55.865437]
            },

            {
                id: 60,
                day: "5",
                month: "июня",
                name: "Выставка фотографии",
                rating: 8.9,
                location: "Москва",
                price: "low",
                img: "/images/events/photography-exhibition-promo.webp",
                category: 9,
                coordinates: [37.576932, 55.606840]
            },
            {
                id: 61,
                day: "18",
                month: "июня",
                name: "Танцевальный фестиваль",
                rating: 9.3,
                location: "Москва",
                price: "high",
                img: "/images/events/dance-festival-promo.webp",
                category: 9,
                coordinates: [37.570756, 55.604279]
            },
            {
                id: 62,
                day: "1",
                month: "июля",
                name: "Концерт поп-исполнителя",
                rating: 8.7,
                location: "Москва",
                price: "avg",
                img: "/images/events/pop-artist-concert-promo.webp",
                category: 5,
                coordinates: [37.565415, 55.602470]
            },
            {
                id: 63,
                day: "14",
                month: "июля",
                name: "Выставка современного искусства",
                rating: 9.5,
                location: "Москва",
                price: "high",
                img: "/images/events/modern-art-exhibition-promo.webp",
                category: 9,
                coordinates: [37.560215, 55.600521]
            },
            {
                id: 64,
                day: "27",
                month: "июля",
                name: "Концерт рэп-исполнителя",
                rating: 8.8,
                location: "Москва",
                price: "avg",
                img: "/images/events/rap-artist-concert-promo.webp",
                category: 5,
                coordinates: [37.555096, 55.598435]
            }

        ],
        activeBroadcasts: [
            {
                count: 2,
                items: [
                    { title: "Парижские улицы", url: "http://url1" },
                    { title: "Пляжи Бали", url: "http://url2" }
                ],
                category: 0
            },
            {
                count: 1,
                items: [
                    { title: "Спа и релакс", url: "http://url3" }
                ],
                category: 1
            },
            {
                count: 3,
                items: [
                    { title: "Coachella Festifal 2023", url: "/video/mp4/videoplayback.mp4" },
                    { title: "Новые премьеры", url: "http://url5" },
                    { title: "Ретроспектива классики", url: "http://url6" }
                ],
                category: 2
            },
            {
                count: 2,
                items: [
                    { title: "Футбольный матч", url: "http://url7" },
                    { title: "Тренировка в зале", url: "http://url8" }
                ],
                category: 3
            }
        ],
        recommendedEvents: [
            {
                id: 1,
                day: "10",
                month: "мая",
                name: "Yoga Material",
                rating: 7.9,
                location: "Москва",
                price: 'low',
                img: '/images/events/yoga-promo.webp',
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
                img: '/images/events/spider-man-promo.webp',
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
                img: '/images/events/the-beatles-promo.webp',
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
                img: '/images/events/art-promo.webp',
                category: 9
            },
            {
                id: 5,
                day: "10",
                month: "мая",
                name: "Yoga Material",
                rating: 7.9,
                location: "Москва",
                price: 'low',
                img: '/images/events/yoga-promo.webp',
                category: 3
            },
            {
                id: 6,
                day: "23",
                month: "мая",
                name: "Человек-павук",
                rating: 7.7,
                location: "Москва",
                price: 'avg',
                img: '/images/events/spider-man-promo.webp',
                category: 2
            },
            {
                id: 7,
                day: "12",
                month: "мая",
                name: "Come Together",
                rating: 9.9,
                location: "Москва",
                price: 'high',
                img: '/images/events/the-beatles-promo.webp',
                category: 4
            },
            {
                id: 8,
                day: "31",
                month: "мая",
                name: "ART - Цветная полоса",
                rating: 8,
                location: "Реутов",
                price: 'free',
                img: '/images/events/art-promo.webp',
                category: 9
            },

        ],
        upcomingEvents: [
            {
            id: 1,
            day: "10",
            month: "мая",
            name: "Зоопарк на московском",
            rating: 7.9,
            location: "Москва",
            price: 'low',
            img: '/images/events/green-promo.webp',
            category: 10
            },
            {
                id: 2,
                day: "23",
                month: "мая",
                name: "Битва красок",
                rating: 7.7,
                location: "Москва",
                price: 'avg',
                img: '/images/events/color-promo.webp',
                category: 2
            },
            {
                id: 3,
                day: "12",
                month: "мая",
                name: "Лыжный фестиваль",
                rating: 9.9,
                location: "Москва",
                price: 'high',
                img: '/images/events/ski-promo.webp',
                category: 3
            },
            {
                id: 4,
                day: "21",
                month: "июня",
                name: "7even 7nines",
                rating: 8,
                location: "Москва",
                price: 'high',
                img: '/images/events/party-promo.webp',
                category: 4
            },],



    },
    mutations: {
        updateTickets(state, tickets) {
            state.tickets = tickets;
        }
    },

})