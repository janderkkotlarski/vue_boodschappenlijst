<script setup>
import {useRoute} from 'vue-router';

import GroceryForm from '../components/GroceryForm.vue';

import {router} from '../../../router';
import {getGroceryById, updateGrocery} from '../store';

import { digitRounding } from '../../../components/functions.mjs';

const submitText = "Veranderen";

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
    Pas boodschap {{ grocery.name }} aan:
    <br />
    <GroceryForm @submit="editGrocery" :grocery="grocery" :submit-text="submitText"/>
</template>
