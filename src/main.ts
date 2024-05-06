import { createApp } from "vue";
import "./_partials.scss";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
