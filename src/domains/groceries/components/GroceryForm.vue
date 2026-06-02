<script setup>
const props = defineProps({
    grocery: Object,
});

const grocery = props.grocery;

const emit = defineEmits(['submit']);

const submit = () => {
    emit('submit', grocery);
}
</script>

<template>
    <form>
        <label for="name">Naam</label>
        <input type="text" id="name" name="name" :value="grocery.name">
        <label for="price">Prijs</label>
        <input type="number" id="price" name="price" min="0" :value="grocery.price">
        <label for="amount">Aantal</label>
        <input type="number" id="amount" name="amount" min="0" :value="grocery.amount">
        <button @click="submit">Toevoegen</button>
    </form>
</template>