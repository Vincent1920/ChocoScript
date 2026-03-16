<script setup>
import { useAuthStore } from '../Stores/login'; // Hubungkan ke Store

const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    // Panggil action yang ada di Store
    await authStore.loginAction({ email: email.value, password: password.value });
    
    // Jika tidak ada error, pindah ke Home
    router.push('/');
  } catch (err) {
    alert("Login Gagal: " + err);
  }
};
</script>

<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center p-4 relative font-sans"
       :style="{ backgroundImage: 'url(' + bgImage + ')' }"
       style="background-size: cover; background-position: center;">
    
    <div class="absolute inset-0 bg-black/40 z-0"></div>

    <div class="absolute top-6 left-10 z-10 flex flex-col text-white">
      <div class="flex items-center gap-2">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="text-2xl font-bold tracking-tight">ClaylO</span>
      </div>
      <span class="text-xs mt-1 opacity-80">Studio</span>
      <span class="text-[9px] mt-0.5 opacity-60">claylostudio.com</span>
    </div>

    <div class="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6">
      
      <div class="flex-1 text-center md:text-left">
        <h1 class="font-serif italic text-7xl md:text-9xl text-white font-black tracking-tighter shadow-xl">
          Fret Shop
        </h1>
      </div>

      <div class="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl glass-morphism flex flex-col text-white">
        
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold font-serif">Log In</h2>
          <div class="text-sm opacity-80 flex gap-1 font-serif">
            <span>Log In</span> / <span>Sign Up</span>
          </div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-medium mb-1.5 opacity-90" for="email">Email</label>
            <input 
              v-model="email"
              type="email" 
              id="email" 
              class="w-full p-3 bg-white/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/30 transition outline-none" 
              required
            />
          </div>

          <div class="relative">
            <label class="block text-sm font-medium mb-1.5 opacity-90" for="password">Password</label>
            <input 
              v-model="password"
              type="password" 
              id="password" 
              class="w-full p-3 bg-white/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/30 transition outline-none" 
              required
            />
            <a href="#" class="absolute right-0 top-0 text-xs mt-1 opacity-70 hover:opacity-100 font-serif">Forgot Password?</a>
          </div>

          <div class="flex justify-end pt-2">
            <button type="submit" class="bg-white text-black font-bold px-8 py-2.5 rounded-lg hover:bg-gray-200 transition duration-300 font-serif">
              Log In
            </button>
          </div>
        </form>

        <div class="relative my-10 text-center">
          <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-white/20"></div></div>
          <span class="relative bg-[#2a2a2a] px-3 text-xs opacity-60 font-serif">OR</span>
        </div>

        <div class="flex justify-center gap-6 mb-8">
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <svg class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.18 1.137 15.41 0 12.24 0 5.466 0 0 5.466 0 12.24s5.466 12.24 12.24 12.24c7.069 0 11.79-4.951 11.79-11.964 0-.741-.06-1.309-.176-1.874H12.24z"/></svg>
          </button>
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <svg class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
          </button>
          <button class="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <svg class="w-5 h-5" viewBox="0 0 1200 1227"><path fill="currentColor" d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
          </button>
        </div>

        <div class="text-center text-sm opacity-80 font-serif">
          Don't have an account? <a href="#" class="font-bold underline hover:opacity-100">Sign up</a>
        </div>

      </div>
    </div>

  </div>
</template>

