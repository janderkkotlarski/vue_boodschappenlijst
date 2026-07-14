<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import {getAllGroceries, addGrocery} from '../store.js';
import {router} from '../../../router/index.js';

import { digitRounding } from '../../../components/functions.mjs';

const grocery = {
    id: getAllGroceries.value.length + 1,
    name: '',
    price: 0,
    amount: 0,
};

const curateGrocery = groc => {
    groc.price = digitRounding(groc.price, 2);
    groc.amount = digitRounding(groc.amount, 0);
}

const pushGrocery = groc => {
    curateGrocery(groc);
    addGrocery(groc);
    router.push('/');
};
</script>

<template>
    Nieuwe boodschap
    <br />
    <GroceryForm @submit="pushGrocery" :grocery="grocery" />
</template>
