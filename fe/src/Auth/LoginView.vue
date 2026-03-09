<script setup>
import { ref } from 'vue'

const isSignUp = ref(false)

const toggleForm = () => {
  isSignUp.value = !isSignUp.value
}
</script>

<template>
  <div class="auth-wrapper min-h-screen flex items-center justify-center bg-[#ecf0f3]">
    <h1 class="text-2xl font-bold">Login ChocoScript</h1>
    </div>
</template>

<style scoped>
/* Tambahkan style di sini nanti */
</style>