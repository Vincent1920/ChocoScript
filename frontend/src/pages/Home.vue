<template>
  <div>
    <header class="relative h-[600px] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=2000&auto=format&fit=crop" 
        alt="Chocolate Background" 
        class="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      <div class="relative z-10 container mx-auto px-10 text-white">
        <h1 class="text-6xl font-serif font-bold mb-4">Premium Chocolate</h1>
        <p class="text-lg mb-8 max-w-lg leading-relaxed">
          Packed with natural ingredients, 30% protein and no artificial sweeteners
        </p>
        
        <div class="flex gap-4">
          <button class="border-2 border-white px-8 py-2 rounded-lg bg-black/30 hover:bg-white hover:text-black transition">
            Shop Here
          </button>
          <button class="border-2 border-[#b87333] px-8 py-2 rounded-lg text-[#f4a460] hover:bg-[#b87333] hover:text-white transition">
            About Us
          </button>
        </div>
      </div>
    </header>

    <section class="py-20 text-center bg-[#f5e6da]">
      <h2 class="text-5xl font-serif font-bold text-[#c28e6b] tracking-[0.2em] uppercase">
        PROTEIN ALAMI
      </h2>
      <p class="mt-4 text-[#3d2b1f] italic">Discover the power of natural cocoa</p>
    </section>
  </div>
</template>

<script setup>
// Logika spesifik halaman home bisa ditaruh di sini
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>