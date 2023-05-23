import '@/scss/style.scss'
import App from "@/App.vue";
import router from "@/router/router";


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/virtual';
import {createApp} from "vue";
import store from "@/store/index.js";


const app = createApp(App)

app
    .use(store)
    .use(router)
    .mount('#app')