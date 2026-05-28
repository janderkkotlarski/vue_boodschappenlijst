<script></script>

<template>
    <h1>Hello App!</h1>
    <p>
        <strong>Current route path:</strong>
        {{ $route.fullPath }}
    </p>
    <nav>
        <RouterLink to="/">Overzicht</RouterLink>
        <RouterLink to="/create">Nieuwe Boodschap</RouterLink>
        <RouterLink to="/edit">Verander Boodschap</RouterLink>

        Does it mane?
    </nav>
    <main>
        <br />
        Ap
        <br />

        <RouterView :key="$route.path" />
    </main>
</template>
