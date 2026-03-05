<template>
  <div class="min-h-screen bg-stone-100 flex flex-col items-center justify-center p-6 font-sans">
    
    <div class="max-w-sm w-full bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-200 group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(139,69,19,0.2)]">
      
      <div class="relative h-56 bg-gradient-to-br from-amber-800 to-stone-900 flex items-center justify-center overflow-hidden">
        <span class="text-7xl group-hover:scale-125 transition-transform duration-500">🍫</span>
        <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase">
          Premium
        </div>
      </div>

      <div class="p-8">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h2 class="text-2xl font-black text-stone-800 tracking-tight">Dark Choco Script</h2>
            <p class="text-stone-400 text-sm font-medium">Original Hand-Crafted</p>
          </div>
          <span class="text-xl font-bold text-amber-700">Rp 45k</span>
        </div>

        <p class="text-stone-600 leading-relaxed mb-8 text-sm">
          Perpaduan cokelat hitam 75% dengan sentuhan kodingan rapi. Manisnya pas, performanya kencang!
        </p>

        <button class="w-full bg-stone-900 text-white font-bold py-4 rounded-xl transition-all duration-300 active:scale-95 hover:bg-amber-800 flex items-center justify-center gap-2">
          <span>Checkout Sekarang</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <div class="mt-8 flex items-center gap-2 text-stone-400 text-sm">
      <div class="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
      Tailwind v4 + Vue 3 Aktif
    </div>

  </div>
</template>

<style>
/* Kamu bisa hapus semua style di sini karena kita pakai Tailwind full */
</style>