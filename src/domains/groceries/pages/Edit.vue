<script setup>
import {useRoute} from 'vue-router';

// import {router} from '../../../router';
// import {getGroceryById} from '../store';

const route = useRoute();

const ident = route.params.id;
</script>

<template>
    Boodschap {{ ident }} aanpassen

    <br />

    {{ route }}
</template>
