import menuFix from "./utils/admin-menu-fix";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#vue-admin-app");
// fix the admin menu for the slug "vue-app"
menuFix("vue-app");
