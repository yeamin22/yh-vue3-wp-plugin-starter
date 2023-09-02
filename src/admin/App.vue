<script setup>
import { ref, computed } from 'vue'
import Home from "admin/pages/Home.vue";
import Settings from "admin/pages/Settings.vue";

const routes = {
  '/': Home,
  '/settings': Settings
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
  <div id="vue-backend-app">
    <h1>Backend App</h1>
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
