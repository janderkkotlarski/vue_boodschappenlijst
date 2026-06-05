<script setup>
const props = defineProps({
    grocery: Object,
});

const groceryCopy = props.grocery;

const emit = defineEmits(['submit']);

const submitGrocery = () => {
    emit('submit', groceryCopy);
};
</script>

<template>
    <label for="name">Naam:</label>
    <input type="text" v-model="groceryCopy.name" />
    <br />
    <label for="price">Prijs:</label>
    <input type="number" min="0" v-model.number="groceryCopy.price" />
    <br />
    <label for="amount">Aantal:</label>
    <input type="number" min="0" v-model.number="groceryCopy.amount" />
    <br />
    <button type="button" @click="submitGrocery">Toevoegen</button>
</template>
