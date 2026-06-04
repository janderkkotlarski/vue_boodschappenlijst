<script setup>
import {reactive} from 'vue';
const props = defineProps({
    grocery: Object,
});

const groceryCopy = reactive(props.grocery);

const emit = defineEmits(['submit']);

const submit = () => {
    emit('submit', groceryCopy);
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
        <button @click="submit">Toevoegen</button>
    </form>
</template>
