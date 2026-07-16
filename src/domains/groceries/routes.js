import Overview from './pages/OverView.vue';
import Create from './pages/Cre_ate.vue/index.js';
import Edit from './pages/Ed_it.vue/index.js';
import Delete from './pages/DeLete.vue';

/// Routes can be defined on their own
export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit/:id', component: Edit},
    {path: '/delete/:id', component: Delete},
];
