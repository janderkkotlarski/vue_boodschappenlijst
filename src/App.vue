<script setup>
import {computed} from 'vue';

const groceryList = defineModel('groceryList', {
    type: Object,
    default: [
        {id: 1, name: 'Rijst', price: 1.0, amount: 1},
        {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
        {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
        {id: 4, name: 'Noten', price: 2.99, amount: 0},
    ],
});

const subTotals = defineModel('subTotals', {
    type: Object,
    default: [],
});

const subTotalInit = () => {
    for (const entry of groceryList) {
        subTotals.value.push({id: entry.id, subTotal: entry.amount * entry.price});
    }
};

subTotalInit();

const arrayEntry = (array, key, value) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }

    return 'Value [' + value + '] for key [' + '] was not found!';
};

const subTotaler = index => {
    return arrayEntry(groceryList, 'id', index).name;
};

// const subTotals = computed(() => {
//     let subs = [];

//     for (const entry of groceryList.value) {
//         subs.push({id: entry.id, subTotal: entry.amount * entry.price});
//     }

//     return subs;
// });

// const subbedTotal = computed(index => {
//     return arrayEntry(subTotals, 'id', index).subTotal;
// });
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Prijs</th>
            <th>Aantal</th>
            <th>Subtotaal</th>
        </tr>
        <tr v-for="entry in groceryList" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.price }}</td>
            <td>{{ entry.amount }}</td>
            <td>{{ subTotaler(entry.id) }}</td>
        </tr>
        <tr>
            <td>Totaal</td>
            <td></td>
            <td></td>
            <td>?</td>
        </tr>
    </table>
</template>
