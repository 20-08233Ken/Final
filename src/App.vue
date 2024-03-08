<script setup>
    import Home from './Views/Home.vue';
    import Navigation from './components/Others/Navigation.vue';
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main class="w-full">
      <RouterView/>
    </main>
</template>