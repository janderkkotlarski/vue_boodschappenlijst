<script setup>
import {useRoute} from 'vue-router';

import GroceryForm from '../components/GroceryForm.vue';

import {router} from '../../../router';
import {getGroceryById, updateGrocery} from '../store';

import { digitRounding } from '../../../components/functions.mjs';

const route = useRoute();

const ident = parseInt(route.params.id.replace(":", ""));

const grocery = getGroceryById(ident);

const curateGrocery = groc => {
    groc.price = digitRounding(groc.price, 2);
    groc.amount = digitRounding(groc.amount, 0);
}

const editGrocery = groc => {
    curateGrocery(groc);
    updateGrocery(groc);
    router.push('/');
};
</script>

<template>
    Boodschap {{ ident }} aanpassen

    <br />
    <GroceryForm @submit="editGrocery" :grocery="grocery" />
</template>
