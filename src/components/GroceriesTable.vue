<script setup>
import {computed} from 'vue';

import {invisChar} from './constants.mjs';
import {digitRounding} from './functions.mjs';

import {router} from '../router';

/// defineProps work like 'reactive'
/// Proper name utilization
const props = defineProps({
    groceryList: {type: Object, default: null},
});

const totalizedList = computed(() => {
    let total = 0;

    for (const entry of props.groceryList) {
        /// If the amount is a number
        if (!isNaN(entry.amount)) {
            /// Add the entry's freshly calculated subtotal
            total += entry.price * entry.amount;
        }
    }

    /// Nicely round the result to two digits behind
    return digitRounding(total, 2);
});

/// Get an array entry of the key has a certain value
const arrayEntry = (array, key, value) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }

    return null;
};

/// Increase amount
const plussing = (array, index) => {
    ++arrayEntry(array, 'id', index).amount;
};

/// Decrease amount if positive
const minussing = (array, index) => {
    const entry = arrayEntry(array, 'id', index);

    if (entry.amount > 0) {
        --entry.amount;
    }
};

/// Get rid of any negative amount
/// Works best for reactive objects
/// In the template part any object is counted as reactive
const checkNumber = (array, index) => {
    const entry = arrayEntry(array, 'id', index);

    if (entry.amount < 0) {
        entry.amount = 0;
    }
};

const editing = ident => {
    const id = ident.toString();

    const route = '/edit/:' + id;

    router.push(route);
};

const deleting = ident => {
    const id = ident.toString();

    const route = '/delete/:' + id;

    router.push(route);
};
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
            <th>Veranderen</th>
            <th>Verwijder</th>
        </tr>
        <!-- A grocery list table with different ways of changing the amounts -->
        <tr v-for="entry in props.groceryList" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.price }}</td>
            <td>
                <button @click="minussing(props.groceryList, entry.id)">minder: {{ entry.id }}</button>
            </td>
            <td>
                <input
                    v-model.number="entry.amount"
                    @change="checkNumber(props.groceryList, entry.id)"
                    type="number"
                    min="0"
                />
            </td>
            <td>
                <button @click="plussing(props.groceryList, entry.id)">meer: {{ entry.id }}</button>
            </td>
            <td>{{ digitRounding(entry.price * entry.amount, 2) }}</td>
            <td>
                <button @click="editing(entry.id)">Verander {{ entry.name }}: {{ entry.id }}</button>
            </td>
            <td>
                <button @click="deleting(entry.id)">Verwijder {{ entry.name }}: {{ entry.id }}</button>
            </td>
        </tr>
        <tr>
            <td>{{ invisChar }}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Totaal</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{ totalizedList }}</td>
            <td></td>
            <td></td>
        </tr>
    </table>
</template>
