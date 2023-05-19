import '@/scss/style.scss'

import App from "@/App.vue";
import router from "@/router/router";
import {createApp} from "vue";

const app = createApp(App)

app
    .use(router)
    .mount('#app')