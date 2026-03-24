<template>
  <div class="min-h-screen bg-[#decdb5] font-sans antialiased flex flex-col">
    <main class="flex-grow flex items-center justify-center p-6 gap-12 flex-col md:flex-row">
      
      <div class="flex flex-col items-start max-w-md">
        <h2 class="text-2xl font-medium text-[#131313] mb-4 ml-2 italic">
          {{ product.name }}
        </h2>
        <div class="relative group">
          <div class="w-[450px] h-[320px] bg-[#e1b882] rounded-[2rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white/50">
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="w-[350px] bg-[#e1b882]/40 p-10 rounded-[2.5rem] border border-[#B87C4C]/30 shadow-2xl backdrop-blur-sm">
        <div class="mb-8 text-center">
          <h3 class="text-4xl font-bold text-[#131313] mb-2">
            IDR {{ product.price.toLocaleString('id-ID') }}.00
          </h3>
          <p class="text-sm text-[#575739] italic">Siap dikirim ke rumah Anda</p>
        </div>

        <div class="flex flex-col gap-6">
          <div class="text-center">
            <label class="block text-lg text-[#0f0f0e] mb-1 font-semibold">Jumlah Barang</label>
            <p class="text-[10px] text-red-600 mb-3 font-bold uppercase tracking-tighter">
              Stok Tersisa: {{ product.stock }}
            </p>
            
            <div class="flex items-center justify-center bg-[#ede4db] rounded-xl shadow-inner border-2 border-transparent focus-within:border-[#B87C4C] transition-all overflow-hidden h-[55px]">
              <button 
                @click="decreaseQty"
                class="w-16 h-full text-2xl font-bold text-[#575739] hover:bg-[#e1b882]/30 transition-colors active:scale-90"
                :disabled="quantity <= 1"
              >
                −
              </button>

              <input 
                type="number" 
                v-model.number="quantity"
                @input="validateInput"
                class="w-full h-full text-center text-xl bg-transparent outline-none font-bold text-[#131313]"
              />

              <button 
                @click="increaseQty"
                class="w-16 h-full text-2xl font-bold text-[#575739] hover:bg-[#e1b882]/30 transition-colors active:scale-90"
                :disabled="quantity >= product.stock"
              >
                +
              </button>
            </div>
          </div>

          <button 
            @click="addToCart"
            class="w-full py-4 bg-[#575739] text-[#e2d8cf] font-bold rounded-xl uppercase tracking-widest hover:bg-[#45452d] transition-colors shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="product.stock <= 0"
          >
            Tambah Cart
          </button>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const product = ref({
  id: 1,
  name: 'dddd',
  price: 2222,
  stock: 222,
  image: 'https://i.ibb.co/XF8X8nB/logo-hmif.png'
})

const quantity = ref(1)

// Logika Tambah
const increaseQty = () => {
  if (quantity.value < product.value.stock) {
    quantity.value++
  }
}

// Logika Kurang
const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// Validasi jika user mengetik manual
const validateInput = () => {
  if (quantity.value > product.value.stock) {
    quantity.value = product.value.stock
  } else if (quantity.value < 1 || !quantity.value) {
    quantity.value = 1
  }
}

const addToCart = () => {
  alert(`Berhasil menambahkan ${quantity.value} item ke keranjang!`)
}
</script>

<style scoped>
/* Menghilangkan panah bawaan browser di input number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>