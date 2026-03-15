<template>
  <div class="min-h-screen bg-[#f5e6da]">
    <Navbar /> 
    
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.path">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue"; // Pastikan file ini ada

const route = useRoute();

watch(
  () => route.name,
  (newName) => {
    document.title = newName
      ? `${capitalize(newName)} | ChocoScript`
      : "ChocoScript";
  },
  { immediate: true }
);

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
</script>

<style>
/* Animasi pindah halaman */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>