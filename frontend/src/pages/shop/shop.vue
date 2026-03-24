<template>
    <div class="min-h-screen bg-[#FFE9DA] text-[#48311B] font-sans antialiased pb-12">

        <section class="w-full h-[350px] relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1548907040-4baa42d100c9?q=80&w=2000&auto=format&fit=crop"
                alt="ChocoScript Banner" class="w-full h-full object-cover object-center scale-105" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
                <div
                    class="bg-white/10 backdrop-blur-md border border-white/20 px-12 py-8 rounded-2xl shadow-xl text-center">
                    <h1 class="text-5xl font-extrabold tracking-tight text-white drop-shadow-md mb-2">
                        Koleksi ChocoScript
                    </h1>
                    <p class="text-white/80 text-lg font-medium">Sentuhan Premium di Setiap Gigitan</p>
                </div>
            </div>
        </section>

        <div class="sticky top-0 w-full h-[80px] bg-white shadow-md z-50 flex justify-center items-center border-b-4 border-[#F8DEC3]">
            <div class="relative w-full max-w-3xl h-full flex items-center justify-center overflow-hidden">
                <h1 class="relative flex items-center justify-center">
                    <div
                        class="animate-reveal-text text-[#DD751F] font-['Rochester',cursive] text-[3.5rem] font-black uppercase whitespace-nowrap overflow-hidden border-r-4 border-[#DD751F]">
                        ChocoScript
                    </div>
                </h1>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

            <aside class="lg:col-span-1 sticky top-28 z-40">
                <div class="bg-white rounded-3xl shadow-lg border border-[#f6d59e]/50 overflow-hidden">
                    <div @click="isCategoryOpen = !isCategoryOpen"
                        class="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                        <h3 class="text-xl font-bold">Kategori</h3>
                        <svg class="w-5 h-5 text-[#d6a609] transition-transform duration-300"
                            :class="{ 'rotate-180': isCategoryOpen }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div v-show="isCategoryOpen"
                        class="px-6 pb-6 space-y-3 border-t border-[#FFE9DA] pt-4 transition-all">
                        <template v-if="categories.length > 0">
                            <button v-for="cat in categories" :key="cat"
                                class="block w-full text-left text-[#48311B]/80 hover:text-[#d6a609] font-medium transition-colors">
                                {{ cat }}
                            </button>
                        </template>
                        <p v-else class="text-sm italic text-gray-400">Belum ada kategori</p>
                    </div>
                </div>
            </aside>

            <section class="lg:col-span-3">
                <div v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div v-for="product in products" :key="product.id"
                        class="bg-white p-4 rounded-[2.5rem] shadow-xl border border-[#f6d59e]/30 group hover:-translate-y-2 transition-all duration-300">
                        <div
                            class="relative z-10 -mb-4 w-3/4 mx-auto bg-white border border-[#f6d59e] shadow-sm rounded-xl py-1 px-3 text-center">
                            <p class="text-[#d6a609] font-bold">IDR {{ product.price.toLocaleString() }}</p>
                        </div>

                        <div
                            class="bg-[#FFE9DA]/50 rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-8">
                            <img :src="product.image" :alt="product.name"
                                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <div class="mt-4 text-center">
                            <h4 class="text-xl font-bold">{{ product.name }}</h4>
                            <p class="text-sm text-gray-400">Stok: {{ product.stock }}</p>
                        </div>
                    </div>
                </div>

                <div v-else
                    class="bg-white p-10 rounded-3xl shadow-xl border border-[#f6d59e]/50 min-h-[450px] flex flex-col items-center justify-center text-center">
                    <div class="w-24 h-24 bg-[#FFE9DA] rounded-full flex items-center justify-center mb-6">
                        <svg class="w-12 h-12 text-[#d6a609]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold text-[#48311B] mb-3">Produk belum tersedia</h3>
                    <p class="text-[#48311B]/60 max-w-md mx-auto leading-relaxed">
                        Kami sedang menyiapkan koleksi ChocoScript terbaik khusus untuk Anda. Nantikan update terbaru
                        kami!
                    </p>
                    <button
                        class="mt-8 px-10 py-3.5 bg-[#d6a609] text-white rounded-2xl font-bold hover:bg-[#b88e08] shadow-lg transition-all">
                        Ingatkan Saya
                    </button>
                </div>
            </section>

        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rochester&display=swap');

/* Animasi Reveal & Typing */
@keyframes reveal-text {
    0%, 100% {
        width: 0%;
        opacity: 0;
    }
    10%, 90% {
        opacity: 1;
    }
    40%, 60% {
        width: 100%;
    }
}

/* Animasi Kursor Berkedip (Border Kanan) */
@keyframes blink-cursor {
    50% { border-color: transparent; }
}

.animate-reveal-text {
    display: inline-block;
    animation: 
        reveal-text 6s ease-in-out infinite,
        blink-cursor 0.8s step-end infinite;
    letter-spacing: 0.1em;
}

/* Font Fallback jika Rochester tidak termuat */
.font-rochester {
    font-family: 'Rochester', cursive;
}
</style>

<script setup>
    import {
        ref
    } from 'vue'

    // State Dropdown
    const isCategoryOpen = ref(true)

    // Data Dummy Kategori
    const categories = ref(['Dark Chocolate', 'Milk Chocolate', 'White Chocolate', 'Hazelnut Mix'])

    // Data Dummy Produk
    // Kosongkan array [] jika ingin melihat tampilan "Produk belum tersedia"
    const products = ref([{
            id: 1,
            name: 'Dark Choco Script',
            price: 45000,
            stock: 12,
            image: 'https://cdn-icons-png.flaticon.com/512/121/121855.png'
        },
        {
            id: 2,
            name: 'Milk Choco Script',
            price: 38000,
            stock: 8,
            image: 'https://cdn-icons-png.flaticon.com/512/121/121855.png'
        },
        {
            id: 3,
            name: 'White Choco Script',
            price: 42000,
            stock: 5,
            image: 'https://cdn-icons-png.flaticon.com/512/121/121855.png'
        },
    ])
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

    .font-poppins {
        font-family: 'Poppins', sans-serif;
    }
</style>