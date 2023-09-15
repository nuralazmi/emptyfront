import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from "@/store";
import translate from "@/services/translate";
import PrimeVue from 'primevue/config';
import PrimevuePlugins from "@/plugins/primevue";
import ClickOutside from "click-outside-vue3"
import '@/assets/styles.scss';
const app = createApp(App);

app.use(router);
app.use(store);

app.use(PrimeVue, {ripple: true});
app.use(PrimevuePlugins)
app.use(ClickOutside)

app.config.globalProperties.$translate = translate;

app.mount('#app');
