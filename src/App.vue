<script setup>
const groceryList = defineModel([
    {id: 1, name: 'Rijst', price: 1.0, amount: 1},
    {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
    {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
    {id: 4, name: 'Noten', price: 2.99, amount: 0},
]);
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Prijs</th>
            <th>Aantal</th>
        </tr>
        <tr v-for="entry in groceryList" :key="entry.id">
            <td>{{ name }}</td>
            <td>{{ entry.value.price }}</td>
        </tr>
    </table>
    <div>{{ groceryList }}</div>
</template>
