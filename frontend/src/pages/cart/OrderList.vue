<template>
  <div class="min-h-screen bg-[#F5EBE1] py-12 px-4 font-sans text-[#48311B]">
    <div class="max-w-3xl mx-auto">      
      <h1 class="text-2xl italic font-serif mb-6 text-center lg:text-left">Daftar Transaksi</h1>
      <!-- <div class="bg-[#D1FAE5] border border-[#10B981]/30 text-[#065F46] px-6 py-4 rounded-md mb-8 text-sm shadow-sm">
        Pesanan COD berhasil dibuat!
      </div> -->
      
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-5 flex flex-wrap items-center gap-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="text-lg">🛍️</span>
            <span class="font-bold text-sm">Belanja</span>
            <span class="text-gray-500 text-xs">26 Mar 2026</span>
          </div>
          <span class="bg-[#E0E7FF] text-[#4338CA] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tight">
            COD: Menunggu Konfirmasi
          </span>
          <span class="ml-auto text-gray-400 text-[10px] font-mono">INV-VBC22SQDYZ</span>
        </div>
        <div class="p-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-sm"></span>
            <span class="font-bold text-sm">ChocoScript</span>
          </div>
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex gap-4">
              <div class="w-20 h-20 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://via.placeholder.com/80" alt="product" class="w-full h-full object-cover" />
              </div>
              <div class="flex flex-col justify-center">
                <h3 class="font-bold text-base leading-tight">dddd</h3>
                <p class="text-xs text-gray-500 mt-1">7 barang x IDR 2.222</p>
              </div>
            </div>
            <div class="flex flex-col md:items-end border-l md:pl-8 border-gray-100">
              <p class="text-[10px] text-gray-400 uppercase tracking-wider">Total Belanja</p>
              <p class="text-lg font-black">IDR 15.554</p>
            </div>
          </div>
          <div class="mt-6">
            <button class="bg-[#48311B] text-white px-8 py-2 rounded-lg text-xs font-bold hover:bg-black transition-colors uppercase tracking-widest shadow-md">
              Beli Lagi
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Data transaksi bisa dipetakan (map) di sini jika menggunakan database asli
</script>

<style scoped>
/* Menambahkan font serif agar mirip dengan "Daftar Transaksi" di gambar */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

h1 {
  font-family: 'Playfair Display', serif;
}
</style>