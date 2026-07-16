<script setup>
import {ref} from 'vue';

import {getAllGroceries} from '../store.js';

/// Escaping several subfolders in order to go to the correct subfolder
import Groceries from '../../../components/GroceriesTable.vue';

const groceryList = ref(getAllGroceries);
</script>

<template>
    Overzicht

    <br />
    <br />

    <Groceries :grocery-list="groceryList" />
</template>
