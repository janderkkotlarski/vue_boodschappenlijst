<script setup>
import {invisChar} from './components/constants.mjs';
</script>

<template>
    <nav>
        <br />

        <RouterLink to="/">Overzicht</RouterLink>
        {{ invisChar }}
        <RouterLink to="/create">Nieuwe Boodschap</RouterLink>

        <br />
    </nav>
    <main>
        <br />

        <RouterView :key="$route.path" />

        <br />
    </main>
</template>
