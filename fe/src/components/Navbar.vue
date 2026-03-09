<template>
  <nav class="flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
    <RouterLink to="/" class="text-2xl font-serif italic font-bold text-stone-800">
      ChocoScript
    </RouterLink>

    <div class="flex gap-8 text-stone-600 font-medium items-center">
      
      <div class="relative group py-2">
        <button class="hover:text-amber-800 transition flex items-center gap-1 cursor-pointer">
          Shop
          <i class="fa-solid fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
        </button>

        <div class="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white shadow-2xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-stone-50">
          <div class="grid grid-cols-4 gap-6">
            <div class="text-center group/item cursor-pointer">
              <div class="overflow-hidden rounded-lg mb-2">
                <img src="https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?q=80&w=200" alt="Milk" class="w-full h-24 object-cover group-hover/item:scale-110 transition duration-500" />
              </div>
              <p class="text-[10px] uppercase tracking-widest font-bold">Milk Magazine</p>
            </div>
            <div class="text-center group/item cursor-pointer">
              <div class="overflow-hidden rounded-lg mb-2">
                <img src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=200" alt="Nationwide" class="w-full h-24 object-cover group-hover/item:scale-110 transition duration-500" />
              </div>
              <p class="text-[10px] uppercase tracking-widest font-bold">Delivered</p>
            </div>
            <div class="text-center group/item cursor-pointer">
              <div class="overflow-hidden rounded-lg mb-2">
                <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=200" alt="Chocolate" class="w-full h-24 object-cover group-hover/item:scale-110 transition duration-500" />
              </div>
              <p class="text-[10px] uppercase tracking-widest font-bold">Chocolate</p>
            </div>
            <div class="text-center group/item cursor-pointer">
              <div class="overflow-hidden rounded-lg mb-2">
                <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=200" alt="Dark" class="w-full h-24 object-cover group-hover/item:scale-110 transition duration-500" />
              </div>
              <p class="text-[10px] uppercase tracking-widest font-bold">Dark Choco</p>
            </div>
          </div>
        </div>
      </div>

      <RouterLink to="/about" class="hover:text-amber-800 transition">About Us</RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <RouterLink to="/login" class="text-stone-800 font-medium border-b-2 border-stone-800 hover:text-amber-800 transition">
        Login
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>