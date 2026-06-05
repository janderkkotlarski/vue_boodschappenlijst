<script setup>
import {ref} from 'vue';
import {getAllGroceries} from '../store';
const props = defineProps({
    grocery: Object,
});

const groceryCopy = ref(props.grocery);

const emit = defineEmits(['submit']);

const addGrocery = () => {
    emit('submit', groceryCopy.value);
    console.log(getAllGroceries);
};
</script>

<template>
    <form>
        <label for="name">Naam</label>
        <input type="text" id="name" name="name" :value="groceryCopy.name" />
        <label for="price">Prijs</label>
        <input type="number" id="price" name="price" min="0" :value="groceryCopy.price" />
        <label for="amount">Aantal</label>
        <input type="number" id="amount" name="amount" min="0" :value="groceryCopy.amount" />
        <button @click="addGrocery">Toevoegen</button>
    </form>
</template>
