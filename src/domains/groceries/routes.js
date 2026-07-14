import Overview from './pages/OverView.vue';
import Create from './pages/CreAte.vue';
import Edit from './pages/EdIt.vue';

/// Routes can be defined on their own
export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit/:id', component: Edit},
];
