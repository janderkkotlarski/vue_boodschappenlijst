<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import {getAllGroceries, addGrocery} from '../store.js';

// const groceries = getAllGroceries;

const grocery = {name: 'Test', price: 6, amount: 5};
</script>

<template>
    Nieuwe boodschap
    <br />
    <GroceryForm @submit="addGrocery(groceryCopy)" :grocery="grocery" />
</template>
