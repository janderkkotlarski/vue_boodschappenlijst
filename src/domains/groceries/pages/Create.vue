<script setup>
import GroceryForm from '../components/GroceryForm.vue';

const grocery = {name: 'g', price: 0, amount: 0};
</script>

<template>
Nieuwe boodschap
<br />
<GroceryForm :grocery="grocery"/>
</template>
