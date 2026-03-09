<script setup>
import homeImg from '@/assets/img/home.jpg'
</script>

<template>
  <div class="bg-[#fdf5f0] font-sans text-stone-800">
    
    <header class="sticky top-0 z-0 h-[85vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img :src="homeImg" 
             class="w-full h-full object-cover brightness-75 animate-zoom-out" 
             alt="Chocolate Hero" />
      </div>
      
      <div class="relative z-10 px-20 text-white">
        <h1 class="text-7xl font-serif mb-4 italic tracking-tight">Premium Chocolate</h1>
        <p class="max-w-md text-lg mb-8 opacity-90 leading-relaxed font-light">
          Packed with natural ingredients, 30% protein and no artificial sweeteners.
        </p>
        <div class="flex gap-4">
          <button class="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-stone-900 transition-all font-bold uppercase tracking-widest text-xs">
            Shop Here
          </button>
          <button class="px-8 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all font-bold uppercase tracking-widest text-xs">
            About Us
          </button>
        </div>
      </div>
    </header>

    <main class="relative z-20 bg-[#fdf5f0] shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
      
      <section class="py-24 px-12 text-center">
        <h2 class="text-6xl font-serif text-[#c58c6d] mb-20 uppercase tracking-[0.3em]">PROTEIN ALAMI</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          <div class="group cursor-pointer">
            <div class="bg-white p-6 rounded-2xl shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4 text-center">
               <div class="overflow-hidden rounded-xl mb-6">
                 <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=500" 
                      class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>
               <h3 class="font-bold text-2xl mb-3 italic tracking-wide">Dark Choco 75%</h3>
               <button class="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition tracking-widest text-sm uppercase">Shop Here</button>
            </div>
          </div>
          
          <div class="group cursor-pointer md:translate-y-16">
            <div class="bg-white p-6 rounded-2xl shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4 text-center">
               <div class="overflow-hidden rounded-xl mb-6">
                 <img src="https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?q=80&w=500" 
                      class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>
               <h3 class="font-bold text-2xl mb-3 italic tracking-wide">Milk Magazine</h3>
               <button class="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition tracking-widest text-sm uppercase">Shop Here</button>
            </div>
          </div>

          <div class="group cursor-pointer">
            <div class="bg-white p-6 rounded-2xl shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-4 text-center">
               <div class="overflow-hidden rounded-xl mb-6">
                 <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=500" 
                      class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>
               <h3 class="font-bold text-2xl mb-3 italic tracking-wide">Classic Almond</h3>
               <button class="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition tracking-widest text-sm uppercase">Shop Here</button>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-[#3d2b1f] text-[#fdf5f0] py-20 px-12 text-center mt-32">
        <div class="text-5xl font-serif italic mb-12 tracking-tight">ChocoScript</div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto text-[11px] uppercase tracking-[0.2em] font-light">
          <div><p class="font-bold mb-2">Vincent Luhulima</p><p class="opacity-40">10123309</p></div>
          <div><p class="font-bold mb-2">Abdul Malik Febrian</p><p class="opacity-40">10123308</p></div>
          <div><p class="font-bold mb-2">Aditya Khoerul Tammi</p><p class="opacity-40">10123310</p></div>
          <div><p class="font-bold mb-2">Alfa Riza Maftu Eka</p><p class="opacity-40">10123327</p></div>
          <div><p class="font-bold mb-2">Salsabila Nurhaliza</p><p class="opacity-40">10123306</p></div>
        </div>
        <div class="mt-20 pt-10 border-t border-white/5 text-[10px] opacity-20 tracking-[0.5em]">UTS PTI 2026</div>
      </footer>
    </main>
  </div>
</template>