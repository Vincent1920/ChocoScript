<template>
  <div class="min-h-screen bg-[#F3EDE4] font-sans antialiased py-12 md:py-20">
    <div class="max-w-6xl mx-auto px-10 md:px-20">
      <div class="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 min-h-[650px]">
        <div class="w-full md:w-[60%] p-8 md:p-14 border-r border-gray-100">
          
          <section class="mb-12">
            <h2 class="text-2xl font-serif italic text-gray-800 mb-8 border-b border-gray-100 pb-3">
              Alamat Pengiriman
            </h2>
            <div class="space-y-5">
              <div class="grid grid-cols-1 gap-1">
                <label class="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">Nama Penerima</label>
                <input type="text" v-model="form.name" placeholder="Nama lengkap" class="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:border-[#DD751F] focus:ring-1 focus:ring-[#DD751F] outline-none transition-all text-sm" />
              </div>
              
              <div class="grid grid-cols-1 gap-1">
                <label class="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">Email</label>
                <input type="email" v-model="form.email" placeholder="alamat@email.com" class="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:border-[#DD751F] focus:ring-1 focus:ring-[#DD751F] outline-none transition-all text-sm" />
              </div>

              <div class="grid grid-cols-1 gap-1">
                <input type="text" v-model="form.address" placeholder="Alamat Lengkap" class="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:border-[#DD751F] outline-none text-sm" />
              </div>
              
              <div class="flex gap-4">
                <input type="text" v-model="form.city" placeholder="Kota / Kabupaten" class="flex-grow p-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:border-[#DD751F] outline-none text-sm" />
                <input type="text" v-model="form.zip" placeholder="Kode Pos" class="w-1/3 p-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:border-[#DD751F] outline-none text-sm" />
              </div>

              <div class="grid grid-cols-1 gap-1">
                <input type="text" v-model="form.phone" placeholder="Nomor Telepon (WhatsApp)" class="w-full p-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:border-[#DD751F] outline-none text-sm" />
              </div>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-serif italic text-gray-800 mb-8 border-b border-gray-100 pb-3">
              Metode Pembayaran
            </h2>
            <div class="space-y-4">
              <label class="flex items-start p-5 border rounded-xl cursor-pointer transition-all group" 
                :class="form.payment === 'online' ? 'border-[#DD751F] bg-orange-50/30' : 'border-gray-200 hover:bg-gray-50'">
                <input type="radio" v-model="form.payment" value="online" class="mt-1 accent-[#DD751F]" />
                <div class="ml-4">
                  <span class="block font-bold text-gray-800 text-sm">Pembayaran Online</span>
                  <span class="text-[10px] text-gray-400 leading-tight">Bayar otomatis via Transfer Bank (VA), QRIS, atau E-Wallet.</span>
                </div>
              </label>

              <label class="flex items-start p-5 border rounded-xl cursor-pointer transition-all group" 
                :class="form.payment === 'cod' ? 'border-[#DD751F] bg-orange-50/30' : 'border-gray-200 hover:bg-gray-50'">
                <input type="radio" v-model="form.payment" value="cod" class="mt-1 accent-[#DD751F]" />
                <div class="ml-4">
                  <span class="block font-bold text-gray-800 text-sm">Cash on Delivery (COD)</span>
                  <span class="text-[10px] text-gray-400 leading-tight">Bayar tunai ke kurir saat barang sampai di lokasi Anda.</span>
                </div>
              </label>
            </div>
          </section>

          <div class="flex items-center justify-between mt-14">
            <router-link to="/cart" class="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600 flex items-center gap-2 transition-colors">
              <span class="text-lg">‹</span> Kembali ke Keranjang
            </router-link>
            <button @click="processOrder" class="px-10 py-4 bg-[#48311B] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-[#322213] transition-all shadow-xl active:scale-95">
              Konfirmasi & Buat Pesanan
            </button>
          </div>
        </div>

        <div class="w-full md:w-[40%] bg-gray-50/40 p-8 md:p-14">
          <div class="sticky top-10 space-y-8">
            
            <div class="flex items-center gap-5">
              <div class="relative">
                <div class="w-20 h-20 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-3 shadow-sm">
                  <img src="https://i.ibb.co/XF8X8nB/logo-hmif.png" class="max-w-full max-h-full object-contain" />
                </div>
                <span class="absolute -top-2 -right-2 bg-[#48311B] text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-md">
                  6
                </span>
              </div>
              <div class="flex-grow">
                <h4 class="font-bold text-gray-800 italic leading-tight">dddd</h4>
                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Varian: DG</p>
              </div>
              <div class="text-right">
                <p class="text-sm font-bold text-gray-700">IDR 13.332</p>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-8 space-y-4">
              <div class="flex justify-between text-xs font-bold">
                <span class="text-gray-400 uppercase tracking-widest">Subtotal</span>
                <span class="text-gray-700">IDR 13.332</span>
              </div>
              <div class="flex justify-between text-xs font-bold">
                <span class="text-gray-400 uppercase tracking-widest">Pengiriman</span>
                <span class="text-green-600">GRATIS</span>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-8 flex justify-between items-center">
              <span class="text-2xl font-serif italic text-gray-800">Total</span>
              <div class="text-right">
                <span class="text-[10px] text-gray-400 font-black uppercase tracking-tighter block">IDR</span>
                <span class="text-3xl font-bold text-gray-900 leading-none">13.332</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: 'vincent',
  email: 'vincentlululima6010@gmail.com',
  address: '',
  city: '',
  zip: '',
  phone: '',
  payment: 'online'
})

const processOrder = () => {
  console.log('Processing Order:', form.value)
  alert('Pesanan Anda sedang kami proses!')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

input[type="radio"] {
  width: 1.2rem;
  height: 1.2rem;
}

/* Haluskan transisi antar state */
.transition-all {
  transition-duration: 300ms;
}
</style>