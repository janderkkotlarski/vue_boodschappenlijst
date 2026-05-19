<script setup>
import {computed, ref} from 'vue';

/// RIP defineModel and computed together
/// Technically doable, but more complicated to get computed working for defineModel

// const groceryList = defineModel('groceryList', {
//     type: Object,
//     default: [
//         {id: 1, name: 'Rijst', price: 1.0, amount: 1},
//         {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
//         {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
//         {id: 4, name: 'Noten', price: 2.99, amount: 0},
//     ],
// });

/// For that line break in the table
const invisChar = '\u2000';

/// ref works well with computed functions
const groceryList = ref([
        {id: 1, name: 'Rijst', price: 1.0, amount: 1},
        {id: 2, name: 'Broccoli', price: 0.99, amount: 2},
        {id: 3, name: 'Koekjes', price: 1.2, amount: 4},
        {id: 4, name: 'Noten', price: 2.99, amount: 0},
]);

/// Rounding to the specified amount of digits bahind the point
const digitRounding = (decimal, digits) => {
    return isNaN(decimal) || decimal < 0 ? 0 : Math.round(decimal * 10 ** digits) / 10 ** digits;
};

/// Total cost
const totalized = computed(() => {
    let total = 0;

    for (const entry of groceryList.value) {
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
const plus = index => {
    ++arrayEntry(groceryList.value, 'id', index).amount;    
};

/// Decrease amount if positive
const minus = index => {
    const entry = arrayEntry(groceryList.value, 'id', index);

    if (entry.amount > 0) {
        --entry.amount;
    }
};

/// Get rid of any negative amount
const checkNumber = index => {
    const entry = arrayEntry(groceryList.value, 'id', index);

    if (entry.amount < 0) {
        entry.amount = 0;
    }
}

/// Unintended defineModel coupling to computed properties
/// Did help with some deeper insights

const startArray = ref([]);

const startCount = ref(0);

const testArray = defineModel('testArray', {
    type: Array,
    default: [],
});

const testCount = defineModel('testCount', {
    type: Number,
    default: 0,
});

/// Add an entry to the array
const addArray = array => {
    const index = array.value.length + 1;

    // array.value.push({id: index, minused: -index});
    /// The pointer to the array does not update with the above call
    /// With the below call, it does through explicit updating it
    /// Equate the array.value to the array.value and another entry as a new array
    array.value = [...array.value, {id:index, minused: -index}];
};

// Fill up an empty array with the more general entry addition method
const initArray = (array) => {
    for (let index = 1; index <= 10; ++index) {
        addArray(array);
    }
};

initArray(startArray);

initArray(testArray);

const addStartArray = () => {
    addArray(startArray);

    ++startCount.value;
};

const addTestArray = () => {
    addArray(testArray);

    ++testCount.value;
};

const lastStartEntry = computed(() => {
    return arrayEntry(startArray.value, 'id', startArray.value.length).id;
});

const lastTestEntry = computed(() => {
    return arrayEntry(testArray.value, 'id', testArray.value.length).id;
});

/// Minused to the power Index summed
const sumStartArray = computed(() => {
    let sum = 0;

    for (const entry of startArray.value) {
        sum += entry.minused ** entry.id;
    }

    return sum;
});

/// Same for testArray
const sumTestArray = computed(() => {
    let sum = 0;

    for (const entry of testArray.value) {
        sum += entry.minused ** entry.id;
    }

    return sum;
});


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
        <tr v-for="entry in groceryList" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.price }}</td>
            <td><button @click="minus(entry.id)">minder</button></td>
            <!-- A lot of preventing below 0 and non-number amounts -->
            <td><input v-model.number="entry.amount" @change="checkNumber(entry.id)" type="number" min="0" /></td>
            <td><button @click="plus(entry.id)">meer</button></td>
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
            <td>{{ totalized }}</td>
        </tr>
    </table>

    <br />

    <div class="inlined">

        <button @click="addStartArray">De laatste is: {{ lastStartEntry }}</button>

        <div>De macht optelsom is: {{ sumStartArray }}</div>

        <div>Aantal keren geklikt is: {{ startCount }}</div>

        <table>
            <tr>
                <th>Index</th>
                <th>Minused</th>
            </tr>
            <tr v-for="entry in startArray" :key="entry.id">
                <td>{{ entry.id }}</td>
                <td>{{ entry.minused }}</td>
            </tr>
        </table>

    </div>

    <div class="inlined">

            <button @click="addTestArray">De laatste is: {{ lastTestEntry }}</button>

        <div>De macht optelsom is: {{ sumTestArray }}</div>

        <div>Aantal keren geklikt is: {{ testCount }}</div>

        <table>
            <tr>
                <th>Index</th>
                <th>Minused</th>
            </tr>
            <tr v-for="entry in testArray" :key="entry.id">
                <td>{{ entry.id }}</td>
                <td>{{ entry.minused }}</td>
            </tr>
        </table>

    </div>
</template>
