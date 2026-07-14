import {ref, computed} from 'vue';

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
// Somehow splice works when ident - 1 is given as a parameter.
export const removeGrocery = ident => groceries.value.splice(ident - 1, 1);