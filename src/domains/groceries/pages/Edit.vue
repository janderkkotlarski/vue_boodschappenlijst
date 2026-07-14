<script setup>
import {useRoute} from 'vue-router';

// import {router} from '../../../router';
import {getGroceryById} from '../store';

const route = useRoute();

const ident = parseInt(route.params.id.replace(":", ""));

const grocery = getGroceryById(ident);
</script>

<template>
    Boodschap {{ ident }} aanpassen

    <br />
    <br />

    {{ grocery }}
</template>
