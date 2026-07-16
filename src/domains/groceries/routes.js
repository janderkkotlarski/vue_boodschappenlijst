import Overview from './pages/Over_view.vue';
import Create from './pages/Cre_ate.vue';
import Edit from './pages/Ed_it.vue';
import Delete from './pages/DeLete.vue';

/// Routes can be defined on their own
export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit/:id', component: Edit},
    {path: '/delete/:id', component: Delete},
];
