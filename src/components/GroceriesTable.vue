<script setup>
import {computed} from 'vue';

/// For that line break in the table
const invisChar = '\u2000';

/// defineProps work like 'reactive'
const groceries = defineProps({
    groceries: {type: Object, default: null},
});

/// Rounding to the specified amount of digits bahind the point
const digitRounding = (decimal, digits) => {
    return isNaN(decimal) || decimal < 0 ? 0 : Math.round(decimal * 10 ** digits) / 10 ** digits;
};

/// Total cost
const totalizedGroceries = computed(() => {
    let total = 0;

    for (const entry of groceries.groceries) {
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
};

/// Increase amount
const plusGroceries = index => {
    ++arrayEntry(groceries.groceries, 'id', index).amount;
};

/// Decrease amount if positive
const minusGroceries = index => {
    const entry = arrayEntry(groceries.groceries, 'id', index);

    if (entry.amount > 0) {
        --entry.amount;
    }
};

/// Get rid of any negative amount
/// Woeks best for reactive objects
/// In the template part any object is counted as reactive
const checkNumber = (array, index) => {
    const entry = arrayEntry(array, 'id', index);

    if (entry.amount < 0) {
        entry.amount = 0;
    }
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
        </tr>
        <!-- A grocery list table with different ways of changing the amounts -->
        <tr v-for="entry in groceries.groceries" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.price }}</td>
            <td><button @click="minusGroceries(entry.id)">minder</button></td>
            <td>
                <input
                    v-model.number="entry.amount"
                    @change="checkNumber(groceries.groceries, entry.id)"
                    type="number"
                    min="0"
                />
            </td>
            <td><button @click="plusGroceries(entry.id)">meer</button></td>
            <td>{{ digitRounding(entry.price * entry.amount, 2) }}</td>
        </tr>
        <tr>
            <td>{{ invisChar }}</td>
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
            <td>{{ totalizedGroceries }}</td>
        </tr>
    </table>
</template>
