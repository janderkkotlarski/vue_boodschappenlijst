<script setup>
import {ref} from 'vue';
const props = defineProps({
    grocery: Object,
});

const groceryCopy = ref(props.grocery);

const emit = defineEmits(['submit', 'imagination']);

const submitGrocery = () => {
    emit('submit', groceryCopy.value);
};

const emitGrocery = () => {
    emit('imagination', groceryCopy.value);
};
</script>

<template>
    {{ groceryCopy }}

    <br />
    <br />
    <form>
        <label for="name">Naam:</label>
        <input type="text" id="name" name="name" v-model="groceryCopy.name" />
        <br />
        <label for="price">Prijs:</label>
        <input type="number" id="price" name="price" min="0" v-model.number="groceryCopy.price" />
        <br />
        <label for="amount">Aantal:</label>
        <input type="number" id="amount" name="amount" min="0" v-model.number="groceryCopy.amount" />
        <br />
        <button type="button" @click="emitGrocery">Toevoegen</button>
    </form>
</template>
