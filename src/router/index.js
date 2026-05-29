import {createMemoryHistory, createRouter} from 'vue-router';

import {routes} from '../domains/groceries/routes.js';

/// Routes are imported and put into the router
export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
