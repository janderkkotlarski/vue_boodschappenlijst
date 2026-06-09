<script setup>
import {ref} from 'vue';

const props = defineProps({
    grocery: Object,
});

const groceryCopy = ref(props.grocery);

const emit = defineEmits(['submit']);

const submitGrocery = () => {
    emit('submit', groceryCopy.value);
};

const checkPrice = () => {
    if (groceryCopy.value.price < 0) {
        groceryCopy.value.price = 0;
    }
};

const checkAmount = () => {
    if (groceryCopy.value.amount < 0) {
        groceryCopy.value.amount = 0;
    }
}
</script>

<template>
    <label for="name">Naam:</label>
    <input type="text" v-model="groceryCopy.name" minlength="1" maxlength="100"/>
    <br />
    <label for="price">Prijs:</label>
    <input type="number" v-model.number="groceryCopy.price" @change="checkPrice()" min="0" max="10000" />
    <br />
    <label for="amount">Aantal:</label>
    <input type="number" v-model.number="groceryCopy.amount" @change="checkAmount()" min="0" max="10000" />
    <br />
    <button type="button" @click="submitGrocery">Toevoegen</button>
</template>
