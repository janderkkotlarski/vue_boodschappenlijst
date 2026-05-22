<script setup>
import {ref} from 'vue';

import Groceries from './components/GroceriesTable.vue';

const groceryList = ref([
    {id: 1, name: 'Rijst', price: 1.0, amount: 1},
    {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
    {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
    {id: 4, name: 'Noten', price: 2.99, amount: 0},
]);
</script>

<template>
    <Groceries :grocery-list="groceryList" />
</template>
