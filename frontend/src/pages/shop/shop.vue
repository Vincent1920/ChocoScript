<template>
    <div class="min-h-screen bg-[#FFE9DA] text-[#48311B] font-sans antialiased">

        <header class="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <div class="flex items-center">
                    <a href="/" class="text-4xl font-qwigley text-[#48311B] hover:opacity-80 transition">
                        ChocoScript
                    </a>
                </div>

                <div class="hidden md:flex items-center gap-8 font-medium">
                    <a href="#" class="text-[#48311B] hover:text-[#d6a609] transition">Shop</a>
                    <a href="#" class="text-[#48311B]/80 hover:text-[#d6a609] transition">About Us</a>
                    <a href="#" class="text-[#48311B]/80 hover:text-[#d6a609] transition">Contact</a>
                </div>

                <div class="flex items-center gap-4">
                    <button class="relative p-2 text-[#48311B]/80 hover:text-[#48311B]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                        </svg>
                        <span
                            class="absolute top-0 right-0 bg-[#d6a609] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </button>

                    <div class="relative group">
  <button class="flex items-center gap-1.5 font-medium hover:opacity-80 transition cursor-pointer">
    <span>vincent2</span>
    <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button> </div>
                </div>
            </nav>
        </header>

        <section class="w-full h-[300px] relative overflow-hidden">
            <img src="/img/shop-banner.jpg" alt="ChocoScript Banner"
                class="w-full h-full object-cover object-center scale-105" />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <div class="bg-white/10 backdrop-blur-md border border-white/20 px-12 py-6 rounded-2xl shadow-xl">
                    <h1 class="text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                        Seluruh ChocoScript
                    </h1>
                </div>
            </div>
        </section>

        <main class="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">

            <h2 class="text-6xl font-black text-[#d6a609] uppercase tracking-wider mb-12 drop-shadow-sm font-poppins">
                CHOCO
            </h2>

            <div class="w-full flex flex-col lg:flex-row gap-8 items-start">

                <aside class="w-full lg:w-1/4 sticky top-28">
                    <div class="bg-white p-6 rounded-3xl shadow-lg border border-[#f6d59e]/50">
                        <div class="flex items-center justify-between mb-5 pb-3 border-b border-[#FFE9DA]">
                            <h3 class="text-xl font-bold">Kategori</h3>
                            <svg class="w-5 h-5 text-[#d6a609]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7">
                            </svg>
                        </div>

                        <div class="space-y-3 text-[#48311B]/80 text-sm font-medium">
                            <p class="text-sm italic text-gray-400">Belum ada kategori</p>
                        </div>
                    </div>
                </aside>

                <section class="w-full lg:w-3/4">
                    <div class="bg-white p-10 rounded-3xl shadow-xl border border-[#f6d59e]/50 min-h-[400px]">

                        <div class="w-full h-full flex items-center justify-center text-center">
                            <div>
                                <svg class="w-20 h-20 mx-auto text-[#FFE9DA] mb-6" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4">
                                </svg>
                                <p class="text-xl font-medium text-[#48311B]/60">
                                    Produk belum tersedia saat ini.
                                </p>
                                <p class="text-sm text-[#48311B]/40 mt-1">
                                    Kami sedang menyiapkan koleksi ChocoScript terbaik untuk Anda.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </main>

    </div>
</template>

<script setup>
    // State Management (Pinia/Auth) bisa dimasukkan di sini
    // Contoh: Mendapatkan nama user yang login dari store
    // import { useAuthStore } from '../stores/auth';
    // const authStore = useAuthStore();
</script>

<style scoped>
    /* Load font Qwigley untuk logo ChocoScript */
    @import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');
    /* Load font Poppins untuk judul CHOCO */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

    .font-qwigley {
        font-family: 'Qwigley', cursive;
    }

    .font-poppins {
        font-family: 'Poppins', sans-serif;
    }
</style>