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
    // let total = 0;

    // for (const entry of groceryList.value) {
    //     total += entry.price * entry.amount;
    // }

    // return total; // digitRounding(total, 2);

    return groceryList.value.reduce((sum, entry) => sum + entry.amount * entry.price);
});


// const minusEntry = ref(null);

// const minus = index => {
//     minusEntry.value = arrayEntry(groceryList.value, 'id', index);

//     if (minusEntry.value.amount > 0) {
//         --minusEntry.value.amount;
//     }
// };

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


const arrayEntry = (array, key, value) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }
};

const addArray = array => {
    const index = array.value.length + 1;

    array.value.push({id: index, minused: -index});
};

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

const sumStartArray = computed(() => {
    let sum = 0;

    for (const entry of startArray.value) {
        sum += entry.minused ** entry.id;
    }

    return sum;
});

const sumTestArray = computed(() => {
    let sum = 0;

    for (const entry of testArray.value) {
        sum += entry.minused ** entry.id;
    }

    return sum;
});

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
            <td>{{ digitRounding(entry.price * entry.amount, 2) }}</td>
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
</template>
