import { isMobile, addTouchClass } from "./functions.js";
import { burgerInit } from "./functions.js";
import { init } from "./map.js";
import { spollersInit } from "./functions.js";
import { tabBarInit } from "./functions.js";
import { resetInit } from "./functions.js";

if (isMobile.any()) { addTouchClass(); }

burgerInit();
resetInit();
spollersInit();
tabBarInit();



try{
    ymaps.ready(init);

    new Swiper('.event-categories__slider', {
        slidesPerView: 'auto',
        loop: true,
        speed: 5000,
        autoplay: {
            enabled: true,
            delay: 1,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        freeMode: true,
        freeModeMomentum: true,
        freeModeMomentumRatio: 0.5,
        freeModeMomentumBounce: false,
        pauseOnMouseEnter: true,
        reverseDirection: true,
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
    });
    
    new Swiper('.upcoming-events__slider', {
    
    
        navigation: {
            nextEl: '.upcoming-events__slider-btn-next',
            prevEl: '.upcoming-events__slider-btn-prev'
        },
    
        pagination: {
            el: '.upcoming-events__slider-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    
        slidesPerView: 1,
    
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    
    
        spaceBetween: 24,
    
        autoplay: {
            delay: 3000,
    
            disableOnInteraction: false,
        },
    
        loop: true,
    
        speed: 1000,
    
    
    });
    
    new Swiper('.search-result__slider', {
    
    
        navigation: {
            nextEl: '.search-result__slider-btn-next',
            prevEl: '.search-result__slider-btn-prev'
        },
    
        pagination: {
            el: '.search-result__slider-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    
    
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    
        spaceBetween: 12,
    
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            1100: {
                slidesPerView: 1.2,
            }
    
        },
        slideToClickedSlide: true,
    
    });
    
    new Swiper('.near-events__slider', {
    
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        autoplay: {
            delay: 3000,
    
            disableOnInteraction: false,
        },
    
    
        spaceBetween: 12,
    
    });
    
    new Swiper('.tickets__slider', {
        navigation: {
            nextEl: '.tickets__slider-btn-next',
            prevEl: '.tickets__slider-btn-prev'
        },
    
        pagination: {
            el: '.tickets__slider-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    
    
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            670: {
                slidesPerView: 3
            },
            1100: {
                slidesPerView: 4,
            },
    
        },
    
        spaceBetween: 24,
    
    })

    new AirDatepicker(".date-picker", {
        range: true,
        multipleDatesSeparator: ' - ',
        buttons: ['today', 'clear'],
        timepicker: true,
        autoClose: true,
    });

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
            { label: 'Здоровье и красота', value: '1' },
            { label: 'Кино', value: '2' },
            { label: 'Музыка', value: '3' },
            { label: 'Тусовки', value: '4' },
            { label: 'Путешествия', value: '5' },
            { label: 'Спорт и фитнес', value: '6' },
            { label: 'Комедия', value: '7' },
            { label: 'Концерты', value: '8' },
            { label: 'Театр', value: '9' },
            { label: 'Искусство', value: '10' },
        ],
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
            { label: 'Низкая', value: '1' },
            { label: 'Средняя', value: '2' },
            { label: 'Высокая', value: '3' },
        ],
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
            { label: '1 звёзда', value: '1' },
            { label: '2 звёзды', value: '2' },
            { label: '3 звёзды', value: '3' },
            { label: '4 звёзды', value: '4' },
            { label: '5 звёзд', value: '5' },
        ],
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
            { label: 'Онлайн-бронирование', value: '1' },
            { label: 'Рекомендуем', value: '2' },
            { label: 'Специальное предложение', value: '3' },
        ],
    },
    
    {
        ele: '._sort-search',
        multiple: false,
        placeholder: "Выбрать",
        autoSelectFirstOption: true,
        hideClearButton: true,
        options: [
            { label: 'Популярность', value: '1' },
            { label: 'Актуальность', value: '2' },
            { label: 'Рейтинг за всё время', value: '3' },
            { label: 'По алфавиту', value: '4' },
            { label: 'Дата события', value: '5' },
        ],
    },
    
    ];
    selectOptions.forEach(option => VirtualSelect.init(option));
    
}
catch(error){
    console.error(error);
}








