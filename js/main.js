import { isMobile, addTouchClass } from "./functions.js";
import { burgerInit } from "./functions.js";

if (isMobile.any()){
    addTouchClass();
}
burgerInit();

new Swiper('.swiper-container',{


    navigation:{
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

    mousewheel:{
        sensivity: 1
    },

    spaceBetween: 1,

    autoplay: {
        delay: 3000,

        disableOnInteraction:false,
    },

    speed: 1000,

    breakpoints: {
        280:{
            slidesPerView: 1
        },
        320: {
            slidesPerView: 2
        },
        580: {
            slidesPerView: 3,
        },
        1100:{
            slidesPerView: 6
        }
        
    }
});