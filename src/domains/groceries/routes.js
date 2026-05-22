import {createMemoryHistory, createRouter} from 'vue-router';

import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit', component: Edit},
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
