<script setup>
import {ref, computed} from 'vue';

import GroceryForm from '../components/GroceryForm.vue';
import {getAllGroceries, addGrocery} from '../store.js';
import {RouterLink} from 'vue-router';

const groceries = ref(getAllGroceries);

const grocery = {
    id: groceries.value.length + 1,
    name: 'Test',
    price: 6,
    amount: 5,
};

const pushGrocery = groc => {
    addGrocery(groc);
};
</script>

<template>
    Nieuwe boodschap
    <br />
    <GroceryForm @submit="pushGrocery" :grocery="grocery" />
</template>
