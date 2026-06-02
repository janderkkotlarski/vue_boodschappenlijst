<script setup>
const props = defineProps({
    grocery: Object,
});

const submit = () => {

}
</script>

<template>
    <form>
        <label for="name">Naam</label>
        <input type="text" id="name" name="name">
        <label for="price">Prijs</label>
        <input type="number" id="price" name="price">
        <label for="amount">Aantal</label>
        <input type="number" id="amount" name="amount">
        <input type="submit" value="Toevoegen">
    </form>
</template>