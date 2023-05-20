import '@/scss/style.scss'
import App from "@/App.vue";
import router from "@/router/router";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import {createApp} from "vue";


const app = createApp(App)

app
    .use(router)
    .mount('#app')