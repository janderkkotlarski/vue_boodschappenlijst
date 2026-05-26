import {createMemoryHistory, createRouter} from 'vue-router';

import {routes} from '../domains/groceries/routes.js';

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
