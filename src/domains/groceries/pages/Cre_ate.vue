<script setup>
import {ref} from 'vue';

import GroceryForm from '../components/GroceryForm.vue';

import {router} from '../../../router/index.js';
import {getAllGroceries, addGrocery} from '../store.js';

import {digitRounding} from '../../../components/functions.mjs';

const submitText = 'Toevoegen';

const endID = getAllGroceries.value[getAllGroceries.value.length - 1].id;

// ref this for the needed reactivity
const grocery = ref({
    id: endID + 1,
    name: '',
    price: 0,
    amount: 0,
});

const curateGrocery = groc => {
    groc.price = digitRounding(groc.price, 2);
    groc.amount = digitRounding(groc.amount, 0);
};

const pushGrocery = groc => {
    curateGrocery(groc);
    addGrocery(groc);
    router.push('/');
};
</script>

<template>
    Voeg boodschap {{ grocery.name }} toe:
    <br />
    <GroceryForm @submit="pushGrocery" :grocery="grocery" :submit-text="submitText" />
</template>
