<script setup>
import {useRoute} from 'vue-router';

import {router} from '../../../router';
import {getGroceryById, removeGrocery} from '../store';

const submitText = "Verwijderen";

const route = useRoute();

const ident = parseInt(route.params.id.replace(":", ""));

const grocery = getGroceryById(ident);

const deleteGrocery = () => {
    removeGrocery(ident);
    
    router.push('/');
};
</script>

<template>
    Boodschap {{ grocery.name }}:
    <br />
    <button type="button" @click="deleteGrocery">{{ submitText }}</button>
</template>