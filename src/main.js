import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/index.css';

const app = createApp(App);
app.use(router);
app.mount('#app')

/*
app.directive("email",{
    created(el,biding) {
        el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`
    },
});
*/
