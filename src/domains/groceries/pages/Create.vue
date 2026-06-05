<script setup>
import {ref, computed} from 'vue';

import GroceryForm from '../components/GroceryForm.vue';
import {getAllGroceries, addGrocery} from '../store.js';

const groceries = ref(getAllGroceries);

const updateID = computed(() => {
    return groceries.value.length;
});

const grocery = {
    id: groceries.value.length + 1,
    name: 'Test',
    price: 6,
    amount: 5,
};

const updateGrocery = () => {
    console.log(getAllGroceries);
    addGrocery(grocery);
    // ++grocery.id;
};
</script>

<template>
    Nieuwe boodschap
    <br />
    <GroceryForm :grocery="grocery" />
    <br />

    <button @click="updateGrocery(grocery)">Probeer</button>
</template>
