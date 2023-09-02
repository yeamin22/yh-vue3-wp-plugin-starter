
<script setup>
import { ref, computed } from 'vue'
import Home from "frontend/pages/Home.vue";
import Profile from "frontend/pages/Profile.vue";

const routes = {
  '/': Home,
  '/profile': Profile
}

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>
<template>
  <div id="vue-frontend-app">
    <h2>Frontend App</h2>
    <a href="#/">Home</a> |
    <a href="#/profile">Profile</a>
    <component :is="currentView" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
