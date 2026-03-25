<template>
  <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm px-10 py-4 flex justify-between items-center shadow-sm">
    <div class="text-3xl font-serif italic font-bold text-[#3d2b1f]">
      <router-link to="/">ChocoScript</router-link></div>
    <div class="flex gap-12 text-xl font-serif italic text-[#3d2b1f]">
      <router-link to="/shop" class="hover:opacity-70">Shop</router-link>
      <router-link to="/login" class="hover:opacity-70">Login</router-link>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.font-serif {
  font-family: 'Dancing Script', cursive;
}
</style>