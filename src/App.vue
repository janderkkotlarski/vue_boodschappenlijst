<script setup>
import {computed, ref} from 'vue';

const groceryList = defineModel('groceryList', {
    type: Object,
    default: [
        {id: 1, name: 'Rijst', price: 1.0, amount: 1},
        {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
        {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
        {id: 4, name: 'Noten', price: 2.99, amount: 0},
    ],
});

const digitRounding = (decimal, digits) => {
    return Math.round(decimal * 10 ** digits) / 10 ** digits;
};

const totalized = computed(() => {
    let total = 0;

    for (const entry of groceryList.value) {
        total += entry.price * entry.amount;
    }

    return digitRounding(total, 2);
});

const arrayEntry = (array, key, value) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }
};

const minusEntry = ref(null);

const minus = index => {
    minusEntry.value = arrayEntry(groceryList.value, 'id', index);

    if (minusEntry.value.amount > 0) {
        --minusEntry.value.amount;
    }

    totalized();
};

// const subbedTotal = computed(index => {
//     return arrayEntry(subTotals, 'id', index).subTotal;
// });
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Prijs</th>
            <th></th>
            <th>Aantal</th>
            <th></th>
            <th>Subtotaal</th>
        </tr>
        <tr v-for="entry in groceryList" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.price }}</td>
            <td><button @click="minus(entry.id)">minder</button></td>
            <td>{{ entry.amount }}</td>
            <td><button>meer</button></td>
            <td>{{ Math.round(entry.price * entry.amount * 100) / 100 }}</td>
        </tr>
        <tr>
            <td>Totaal</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{ totalized }}</td>
        </tr>
    </table>

    <br />

    {{ minusEntry }}
</template>
