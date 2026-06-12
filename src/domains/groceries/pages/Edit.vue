<script setup>
import {useRoute} from 'vue-router';

import {router} from '../../../router';
import {getGroceryById} from '../store';

const route = useRoute();
</script>

<template>
    Boodschap {{ getGroceryById($route.params.id) }} aanpassen

    <br />

    {{ route }}
</template>
