import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';

const app = createApp(App);
/*
app.directive("email",{
    created(el,biding) {
        el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`
    },
});
*/
app.mount('#app')
