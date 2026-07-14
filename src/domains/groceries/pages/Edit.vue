<script setup>
import {useRoute} from 'vue-router';

// import {router} from '../../../router';
// import {getGroceryById} from '../store';

const route = useRoute();

const ident = route.params.id.replace(":", "");

const idNum = parseInt(ident);
</script>

<template>
    Boodschap {{ idNum }} aanpassen

    <br />

    {{ route }}
</template>
