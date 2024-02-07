import {createRouter, createWebHashHistory} from 'vue-router';
import RouterName from './router-names';

const lazy = (page) => import(`./pages/${page}.vue`)

const routes = [
    { path: '/', name: RouterName.HOME , component: () => lazy("Home") },
    { path: '/about', name: RouterName.ABOUT, component: () => lazy("About") },
    { path: '/service', name: RouterName.SERVICE, component: () => lazy("Service") },
    { path: '/person/:id', name: RouterName.PERSON, component: () => lazy("Person") },
]

const router =createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
  