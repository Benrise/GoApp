import { isMobile, addTouchClass } from "./functions.js";
import { burgerInit } from "./functions.js";

if (isMobile.any()) {
    addTouchClass();
}
burgerInit();

new Swiper('.swiper-container', {


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 6,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensivity: 1
    },

    spaceBetween: 1,

    autoplay: {
        delay: 3000,

        disableOnInteraction: false,
    },

    speed: 1000,

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

const selectOptions = [{
    ele: '._what-filter',
    placeholder: "Что именно?",
    searchPlaceholderText: "Поиск",
    noSearchResultsText: 'Ничего не найдено',
    noOptionsText: 'Опций не найдено',
    optionsSelectedText: "Категорий выбрано",
    optionsSelectedText: "Выбрано",
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
    onServerSearch: onSampleSelectServerSearch,
},

{
    ele: '._when-filter',
    placeholder: "Когда?",
    options: [
        { label: 'Options 1', value: '1' },
        { label: 'Options 2', value: '2' },
        { label: 'Options 3', value: '3' },
    ],
    optionHeight: '50px',

    multiple: true,
},

{
    ele: '._price-filter',
    multiple: true,

    options: [
        { label: 'Options 1', value: '1' },
        { label: 'Options 2', value: '2' },
        { label: 'Options 3', value: '3' },
    ],
    optionHeight: '50px',
},
{
    ele: '._rating-filter',
    multiple: true,

    options: [
        { label: 'Options 1', value: '1' },
        { label: 'Options 2', value: '2' },
        { label: 'Options 3', value: '3' },
    ],
    optionHeight: '50px',
},
{
    ele: '._other-filter',
    multiple: true,

    options: [
        { label: 'Options 1', value: '1' },
        { label: 'Options 2', value: '2' },
        { label: 'Options 3', value: '3' },
    ],
    optionHeight: '50px',
},
];

selectOptions.forEach(option => VirtualSelect.init(option));

function onSampleSelectServerSearch(searchValue, virtualSelect) {
    /** project developer has to define anyMehodToGetDataFromServer function to make API call */
    anyMehodToGetDataFromServer(searchValue).then(function (newOptions) {
        virtualSelect.setServerOptions(newOptions);
    });
}