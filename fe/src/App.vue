<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
/* Reset dasar agar layout penuh */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>