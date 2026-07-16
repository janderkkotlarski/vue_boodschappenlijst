import {ref, computed} from 'vue';

import {arrayEntry} from '../../components/functions.mjs';

// State
const groceries = ref([
    {id: 1, name: 'Rijst', price: 1.0, amount: 1},
    {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
    {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
    {id: 4, name: 'Noten', price: 2.99, amount: 0},
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = grocery => groceries.value.push(grocery);
// Just this empty action dummy function needed for lasting grocery update...?
// It does need to be a function...
export const updateGrocery = () => {};
// Be pedantic when getting rid
export const removeGrocery = ident => {
    const grocery = arrayEntry(groceries.value, 'id', ident);
    const index = groceries.value.indexOf(grocery);
    groceries.value.splice(index, 1);
};
