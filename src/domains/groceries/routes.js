import Overview from './pages/Overview.vue';
import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';

export const routes = [
    {path: '/', name: 'overview', component: Overview},
    {path: '/create', name: 'create', component: Create},
    {path: '/edit', name: 'edit', component: Edit},
];

