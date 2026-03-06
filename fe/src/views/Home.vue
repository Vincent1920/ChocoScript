<template>
  <div class="bg-[#fdf5f0] min-h-screen font-sans text-stone-800">
    <header class="relative h-[70vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=2000" 
             class="w-full h-full object-cover brightness-75" alt="Chocolate Hero" />
      </div>
      
      <div class="relative z-10 px-20 text-white">
        <h1 class="text-6xl font-serif mb-4 italic">Premium Chocolate</h1>
        <p class="max-w-md text-lg mb-8 opacity-90 leading-relaxed">
          Packed with natural ingredients, 30% protein and no artificial sweeteners.
        </p>
        <div class="flex gap-4">
          <button class="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-stone-900 transition-all font-bold uppercase tracking-wider text-sm">
            Shop Here
          </button>
          <button class="px-8 py-3 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all font-bold uppercase tracking-wider text-sm">
            About Us
          </button>
        </div>
      </div>
    </header>

    <section class="py-20 px-12 text-center">
      <h2 class="text-5xl font-serif text-[#c58c6d] mb-16 uppercase tracking-[0.2em]">Protein Alami</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div class="group cursor-pointer">
          <div class="bg-white p-4 rounded-xl shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
             <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=500" class="rounded-lg mb-4 w-full h-64 object-cover" />
             <h3 class="font-bold text-xl mb-2 italic">Dark Choco 75%</h3>
             <button class="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition">Shop Here</button>
          </div>
        </div>
        
        <div class="group cursor-pointer md:translate-y-12">
          <div class="bg-white p-4 rounded-xl shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
             <img src="https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?q=80&w=500" class="rounded-lg mb-4 w-full h-64 object-cover" />
             <h3 class="font-bold text-xl mb-2 italic">Milk Magazine</h3>
             <button class="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition">Shop Here</button>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="bg-white p-4 rounded-xl shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
             <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=500" class="rounded-lg mb-4 w-full h-64 object-cover" />
             <h3 class="font-bold text-xl mb-2 italic">Classic Almond</h3>
             <button class="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition">Shop Here</button>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-[#3d2b1f] text-[#fdf5f0] py-16 px-12 text-center mt-32">
      <div class="text-4xl font-serif italic mb-10">ChocoScript</div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto text-[10px] uppercase tracking-[0.15em]">
        <div><p class="font-bold mb-1">Vincent Luhulima</p><p class="opacity-50">10123309</p></div>
        <div><p class="font-bold mb-1">Abdul Malik</p><p class="opacity-50">10123308</p></div>
        <div><p class="font-bold mb-1">Aditya Khoerul</p><p class="opacity-50">10123310</p></div>
        <div><p class="font-bold mb-1">Alfa Riza</p><p class="opacity-50">10123327</p></div>
        <div><p class="font-bold mb-1">Salsabila Nurhaliza</p><p class="opacity-50">10123306</p></div>
      </div>
      <div class="mt-16 pt-8 border-t border-white/10 text-[10px] opacity-30 tracking-widest">UTS PTI 2026</div>
    </footer>
  </div>
</template>