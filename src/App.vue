<script setup>
import {computed, ref} from 'vue';

import Groceries from './components/GroceriesTable.vue';

/// Get an array entry of the key has a certain value
const arrayEntry = (array, key, value) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }
};

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
    <Groceries />

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
