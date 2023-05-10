import { isMobile, addTouchClass } from "./functions.js";
import { burgerInit } from "./functions.js";

if (isMobile.any()){
    addTouchClass();
}
burgerInit();

new Swiper('.slider__container');