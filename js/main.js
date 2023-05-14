import { isMobile, addTouchClass } from "./functions.js";
import { burgerInit } from "./functions.js";

if (isMobile.any()) {
    addTouchClass();
}
burgerInit();

new Swiper('.event-categories__slider', {


    navigation: {
        nextEl: '.event-categories__slider-btn-next',
        prevEl: '.event-categories__slider-btn-prev'
    },

    pagination: {
        el: '.event-categories__slider-pagination',
        clickable: true,
    },

    slidesPerView: 6,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    autoplay: {
        delay: 0,

        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    slidesPerView: '2',
    autoplay: {
        enabled: true,
        delay: 1,
    },


    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 0.5, 
    freeModeMomentumBounce: false,


    breakpoints: {
        280: {
            slidesPerView: 1
        },
        320: {
            slidesPerView: 2
        },
        580: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 6
        }

    },

    autoHeight: false,

    slidesPerColumn: 1,

    slidesPerView: 3
});

new Swiper('.upcoming-events__slider', {


    navigation: {
        nextEl: '.upcoming-events__slider-btn-next',
        prevEl: '.upcoming-events__slider-btn-prev'
    },

    slidesPerView: 1,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },


    spaceBetween: 24,

    // autoplay: {
    //     delay: 3000,

    //     disableOnInteraction: false,
    // },

    // loop: true,

    // speed: 1000,

    breakpoints: {
        280: {

        },
        320: {

        },
        580: {

        },
        1100: {

        }

    },

});

//========================================================================================  FILTERS ========================================================================================
const selectOptions = [{
    ele: '._what-filter',
    placeholder: "Что именно?",
    searchPlaceholderText: "Поиск",
    noSearchResultsText: 'Ничего не найдено',
    noOptionsText: 'Опций не найдено',
    optionsSelectedText: "Категорий выбрано",
    allOptionsSelectedText: "Все",

    multiple: true,

    options: [
        { label: 'Здоровье и красота', value: '#' },
        { label: 'Кино', value: '#' },
        { label: 'Музыка', value: '#' },
        { label: 'Тусовки', value: '#' },
        { label: 'Путешествия', value: '#' },
        { label: 'Спорт и фитнес', value: '#' },
        { label: 'Комедия', value: '#' },
        { label: 'Концерты', value: '#' },
        { label: 'Театр', value: '#' },
        { label: 'Искусство', value: '#' },
    ],
    optionHeight: '50px',
},
{
    ele: '._where-filter',
    placeholder: "Где?",
    searchPlaceholderText: "Введите город",
    noSearchResultsText: 'Ничего не найдено',
    noOptionsText: 'Опций не найдено',

    multiple: true,

    options: [
        { label: 'Москва', value: '#' },
        { label: 'Казань', value: '#' },
        { label: 'Санкт-Петербург', value: '#' },
    ],
    optionHeight: '50px',
    showOptionsOnlyOnSearch: true,
    // onServerSearch: onSampleSelectServerSearch,
},

{
    ele: '._price-filter',
    multiple: true,
    search: false,
    placeholder: "Ценовая категория",
    selectAllText: "Выбрать всё",
    allOptionsSelectedText: "Любая цена",

    options: [
        { label: 'Низкая', value: '#' },
        { label: 'Средняя', value: '#' },
        { label: 'Высокая', value: '#' },
    ],
    optionHeight: '50px',
},
{
    ele: '._rating-filter',
    multiple: true,
    search: false,
    placeholder: "Рейтинг",
    allOptionsSelectedText: "Любой рейтинг",
    selectAllText: "Выбрать всё",
    optionsSelectedText: "рейтинга выбрано",
    options: [
        { label: '1 звёзда', value: '#' },
        { label: '2 звёзды', value: '#' },
        { label: '3 звёзды', value: '#' },
        { label: '4 звёзды', value: '#' },
        { label: '5 звёзд', value: '#' },
    ],
    optionHeight: '50px',
},
{
    ele: '._other-filter',
    multiple: true,
    search: false,
    placeholder: "Разное",
    selectAllText: "Выбрать всё",
    optionsSelectedText: "выбрано",
    allOptionsSelectedText: "Все опции",
    optionSelectedText: "опция выбрана",
    options: [
        { label: 'Онлайн-бронирование', value: '#' },
        { label: 'Рекомендуем', value: '#' },
        { label: 'Специальное предложение', value: '#' },
    ],
    optionHeight: '50px',
},
];

selectOptions.forEach(option => VirtualSelect.init(option));

// function onSampleSelectServerSearch(searchValue, virtualSelect) {
//     /** project developer has to define anyMehodToGetDataFromServer function to make API call */
//     anyMehodToGetDataFromServer(searchValue).then(function (newOptions) {
//         virtualSelect.setServerOptions(newOptions);
//     });
// }

const resetButton = document.querySelector('._reset');
resetButton.addEventListener('click', () => {
    const selects = document.querySelectorAll('[class*=-filter]');
    // document.querySelector('_what-filter').reset();
    // document.querySelector('_other-filter').reset();
    selects.forEach(select => select.reset());
});


new AirDatepicker(".date-picker", {
    range: true,
    multipleDatesSeparator: ' - ',
    buttons: ['today', 'clear'],
    timepicker: true,
    isMobile: true,
    autoClose: true,
});