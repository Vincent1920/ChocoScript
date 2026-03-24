<template>
  <div class="min-h-screen bg-[#F3EDE4] font-sans antialiased pb-20">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-serif text-[#48311B]">Keranjang Belanja</h2>
        <p class="text-sm text-gray-500 mt-2">Dapatkan pengiriman gratis untuk pesanan Anda!</p>
      </div>

      <div v-if="showAlert" class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-r shadow-sm flex flex-col">
        <p class="font-bold text-sm">Berhasil!</p>
        <p class="text-xs">Berhasil ditambahkan ke keranjang</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-4">
          <div v-for="(item, index) in cartItems" :key="item.id" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center gap-6">
            <div class="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-2 border border-gray-200">
              <img :src="item.image" :alt="item.name" class="max-w-full max-h-full object-contain" />
            </div>

            <div class="flex-grow">
              <h3 class="text-xl font-bold text-gray-800 italic">{{ item.name }}</h3>
              <p class="text-sm text-gray-400">IDR {{ item.price.toLocaleString() }}</p>
              <p class="text-[10px] text-gray-400 uppercase mt-1">1 BUAH / DG</p>
            </div>

            <div class="flex items-center gap-4">
              <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden h-8">
                <button @click="updateQty(index, -1)" class="px-3 hover:bg-gray-100 text-gray-600 transition-colors">-</button>
                <div class="w-10 text-center text-sm font-bold border-x border-gray-300">{{ item.qty }}</div>
                <button @click="updateQty(index, 1)" class="px-3 hover:bg-gray-100 text-gray-600 transition-colors">+</button>
              </div>
              
              <button @click="removeItem(index)" class="text-red-500 text-xs font-bold flex items-center gap-1 hover:text-red-700 transition-colors uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
              </button>
            </div>

            <div class="text-right min-w-[100px]">
              <p class="font-bold text-lg text-gray-800">{{ (item.price * item.qty).toLocaleString() }}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 class="text-lg font-serif italic text-gray-700 border-b pb-4 mb-4">Ringkasan Pesanan</h3>
            
            <div class="space-y-3 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Total Harga</span>
                <span class="text-gray-800 font-medium">IDR {{ totalPrice.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Diskon</span>
                <span class="text-gray-800 font-medium">- IDR 0</span>
              </div>
            </div>

            <div class="border-t pt-4 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-xl font-serif italic text-gray-700">Total Bayar</span>
                <span class="text-2xl font-bold text-gray-800">{{ totalPrice.toLocaleString() }}</span>
              </div>
            </div>

            <button class="w-full py-4 bg-[#48311B] text-white font-bold rounded-lg hover:bg-[#322213] transition-colors shadow-lg shadow-gray-200 uppercase tracking-widest text-sm">
              Checkout Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAlert = ref(true)

// Data dummy sesuai gambar
const cartItems = ref([
  {
    id: 1,
    name: 'dddd',
    price: 2222,
    qty: 5,
    image: 'https://i.ibb.co/XF8X8nB/logo-hmif.png'
  }
])

// Kalkulasi Total
const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.qty), 0)
})

// Fungsi Update Qty
const updateQty = (index, change) => {
  const newQty = cartItems.value[index].qty + change
  if (newQty >= 1) {
    cartItems.value[index].qty = newQty
  }
}

// Fungsi Hapus Item
const removeItem = (index) => {
  if (confirm('Hapus item ini dari keranjang?')) {
    cartItems.value.splice(index, 1)
  }
}
</script>

<style scoped>
/* Tambahan font serf jika ingin lebih mirip */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>