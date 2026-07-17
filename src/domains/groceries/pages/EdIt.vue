<script setup>
import {useRoute} from 'vue-router';

import GroceryForm from '../components/GroceryForm.vue';

import {router} from '../../../router/index.js';
import {getGroceryById, updateGrocery} from '../store.js';

import {curateGrocery} from '../../../components/functions.mjs';

const submitText = 'Veranderen';

const route = useRoute();

/// Transform :id into a workable number
const ident = parseInt(route.params.id.replace(':', ''));

const grocery = getGroceryById(ident);

const editGrocery = groc => {
    curateGrocery(groc);
    updateGrocery(groc);
    router.push('/');
};
</script>

<template>
    Pas boodschap {{ grocery.name }} aan:
    <br />
    <GroceryForm @submit="editGrocery" :grocery="grocery" :submit-text="submitText" />
</template>
