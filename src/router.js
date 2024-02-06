import {createRouter, createWebHashHistory} from 'vue-router';

const lazy = (page) => {
    import(`./pages/${page}.vue`)
}

const routes = [
    { path: '/', component: () => lazy("Home") },
    { path: '/about', component: () => lazy("About") },
]

const router =createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
  