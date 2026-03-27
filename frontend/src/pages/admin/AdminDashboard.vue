<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
    
    <header class="bg-[#1a1c23] text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <div class="text-xl font-bold tracking-tight">ChocoScript</div>
      <button class="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-sm transition border border-gray-600">
        Logout
      </button>
    </header>

    <div class="flex flex-1">
      <aside class="w-64 bg-white border-r border-gray-200 p-4 space-y-2 hidden md:block">
        <nav>
          <ul class="space-y-1">
            <li v-for="item in menuItems" :key="item.name">
              <a href="#" :class="[
                item.active ? 'bg-gray-100 border-gray-300 shadow-sm' : 'border-transparent hover:bg-gray-50',
                'block px-4 py-2 text-sm font-medium border rounded-md text-gray-700 transition-all'
              ]">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="flex-1 p-8 overflow-y-auto">
        <h2 class="text-2xl font-bold text-[#48311B] mb-8 italic">Admin Area</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div v-for="stat in stats" :key="stat.title" class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <p class="text-xs text-gray-400 mb-1 italic">{{ stat.title }}</p>
            <div class="text-2xl font-bold" :class="stat.color || 'text-black'">{{ stat.value }}</div>
            <p class="text-[10px] text-gray-400 mt-1">{{ stat.subtitle }}</p>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
          <h3 class="text-sm font-bold text-gray-600 mb-6 italic border-l-4 border-[#48311B] pl-2">
            Tren Penjualan (7 Hari Terakhir)
          </h3>
          <div class="h-64 w-full bg-gray-50 rounded border border-dashed border-gray-200 flex items-center justify-center text-gray-400">
            [ Line Chart Placeholder ]
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 class="text-sm font-bold text-gray-600 mb-6 italic">Stok Barang Tersedia</h3>
            <div class="h-64 flex items-end gap-4 justify-around px-4">
              <div v-for="n in 3" :key="n" class="w-full max-w-[100px] bg-[#A67C52] rounded-t-sm transition-all hover:opacity-80" :style="{ height: '80%' }"></div>
            </div>
            <div class="flex justify-around mt-2 text-[10px] text-gray-400">
              <span>dddd</span><span>dddd</span><span>dddd</span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 class="text-sm font-bold text-gray-600 mb-6 italic">Persentase Transaksi Diskon</h3>
            <div class="flex flex-col items-center">
              <div class="w-48 h-48 rounded-full bg-[#EF4444] relative flex items-center justify-center">
                 <div class="absolute inset-0 rounded-full border-[20px] border-transparent border-t-[#10B981] hidden"></div>
              </div>
              <div class="mt-8 flex gap-4 text-[10px]">
                <div class="flex items-center gap-1"><span class="w-3 h-3 bg-[#10B981] rounded-sm"></span> Dengan Diskon</div>
                <div class="flex items-center gap-1"><span class="w-3 h-3 bg-[#EF4444] rounded-sm"></span> Tanpa Diskon</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { name: 'Dashboard', active: true },
  { name: 'Toko', active: false },
  { name: 'Kategori', active: false },
  { name: 'diskon', active: false },
  { name: 'transactions', active: false },
]

const stats = [
  { title: 'Total Volume (Bulan Ini)', value: 'Rp 15.554', subtitle: 'Total Penjualan', color: 'text-blue-900' },
  { title: 'Total Transaksi (Bulan Ini)', value: '1', subtitle: 'Transaksi Berhasil' },
  { title: 'Total Potongan Diskon', value: 'Rp 0', subtitle: 'Dari 0 transaksi didiskon', color: 'text-green-500' },
]
</script>

<style scoped>
/* Tambahkan kustomisasi font jika perlu */
</style>