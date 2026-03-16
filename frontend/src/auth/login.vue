<template>
  <div class="bg-[#FFE9DA] font-sans flex flex-col items-center justify-center min-h-screen relative overflow-x-hidden p-4">
    <div 
      class="bg-white rounded-[10px] shadow-2xl relative overflow-hidden w-[768px] max-w-full min-h-[480px] mt-20 transition-all duration-700 ease-in-out"
      :class="{ 'right-panel-active': isRightPanelActive }"
    >
      
      <div class="absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out opacity-0 z-[1] sign-up-container bg-white">
        <form @submit.prevent="handleRegister" class="bg-white flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 class="font-bold text-3xl mb-2 text-[#e6c58c]">Create Account</h1>
          <span class="text-xs text-[#e6c58c] mb-4">use your email for registration</span>
          
          <input v-model="registerData.name" type="text" placeholder="Name" class="auth-input" required />
          <input v-model="registerData.username" type="text" placeholder="Username" class="auth-input" required />
          <input v-model="registerData.email" type="email" placeholder="Email" class="auth-input" required />
          <input v-model="registerData.password" type="password" placeholder="Password" class="auth-input" required />

          <button type="submit" class="auth-btn mt-4" :disabled="authStore.loading">
            {{ authStore.loading ? 'Signing Up...' : 'Sign Up' }}
          </button>
        </form>
      </div>

      <div class="absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out z-[2] sign-in-container bg-white">
        <form @submit.prevent="handleLogin" class="bg-white flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 class="font-bold text-3xl mb-4 text-[#e6c58c]">Sign in</h1>
          <span class="text-xs text-[#e6c58c] mb-4">or use your account</span>

          <input v-model="loginData.email" type="email" placeholder="Email" class="auth-input" required />
          <input v-model="loginData.password" type="password" placeholder="Password" class="auth-input" required />

          <button type="submit" class="auth-btn mt-4" :disabled="authStore.loading">
            {{ authStore.loading ? 'Logging In...' : 'Login' }}
          </button>
        </form>
      </div>

      <div class="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] overlay-container">
        <div class="overlay bg-[#48311B] relative -left-full h-full w-[200%] transform translate-x-0 transition-transform duration-700 ease-in-out flex">
          
          <div 
            class="overlay-panel overlay-left absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transition-transform duration-700 bg-cover bg-center"
            style="background-image: url('/img/login/login3.jpg');"
          >
            <h1 class="font-bold text-3xl text-white drop-shadow-lg">Welcome Back!</h1>
            <p class="text-sm font-light my-5 text-gray-100">To keep connected with us please login with your info</p>
            <button @click="isRightPanelActive = false" class="ghost-btn">Login</button>
          </div>

          <div 
            class="overlay-panel overlay-right absolute right-0 flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transition-transform duration-700 bg-cover bg-center"
            style="background-image: url('/img/login/login.png');"
          >
            <h1 class="font-bold text-3xl text-white drop-shadow-lg">Hello, Friend!</h1>
            <p class="text-sm font-light my-5 text-gray-100">Enter your details and start your journey with us</p>
            <button @click="isRightPanelActive = true" class="ghost-btn">Sign Up</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '../stores/auth'; // Menggunakan file login.js di folder stores
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

// State Management
const isRightPanelActive = ref(false);
const authStore = useAuthStore();
const router = useRouter();

// Form Data
const loginData = reactive({
  email: '',
  password: ''
});

const registerData = reactive({
  name: '',
  username: '',
  email: '',
  password: ''
});

// Handlers
const handleLogin = async () => {
  const success = await authStore.loginAction(loginData);
  if (success) {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: 'Selamat datang di ChocoScript.',
      confirmButtonColor: '#48311B'
    });
    router.push('/');
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Gagal!',
      text: authStore.error || 'Email atau Password salah.',
      confirmButtonColor: '#d33'
    });
  }
};

const handleRegister = async () => {
  // Pastikan registerAction sudah dibuat di store/login.js
  const success = await authStore.registerAction(registerData);
  if (success) {
    Swal.fire({
      icon: 'success',
      title: 'Akun Terdaftar!',
      text: 'Silakan login dengan akun baru Anda.',
      confirmButtonColor: '#48311B'
    });
    isRightPanelActive.value = false; // Pindah ke panel login
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Pendaftaran Gagal',
      text: authStore.error,
      confirmButtonColor: '#d33'
    });
  }
};
</script>

<style scoped>
/* Tailwind v4 Reference untuk menghindari error unknown utility class */
@reference "../style.css";

/* --- Logic Transisi Panel --- */
.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.right-panel-active .overlay {
  transform: translateX(50%);
}

.right-panel-active .overlay-left {
  transform: translateX(0);
}

.right-panel-active .overlay-right {
  transform: translateX(20%);
}

@keyframes show {
  0%, 49.99% { opacity: 0; z-index: 1; }
  50%, 100% { opacity: 1; z-index: 5; }
}

/* --- Reusable Components via @apply --- */
.auth-input {
  @apply bg-[#eee] border-none p-3 my-2 w-full outline-none transition-all focus:ring-1 focus:ring-[#e6c58c];
}

.auth-btn {
  @apply rounded-[20px] border border-[#f6d59e] bg-[#E8D5B5] text-[#432900] text-xs font-bold uppercase py-3 px-10 tracking-wider transition-transform active:scale-95 hover:bg-[#e0cba0] disabled:opacity-50 cursor-pointer;
}

.ghost-btn {
  @apply rounded-full border-2 border-white bg-white/10 text-white text-sm font-bold uppercase py-3 px-12 tracking-widest transition-all backdrop-blur-md hover:bg-white hover:text-[#432900] active:scale-95 cursor-pointer;
}

.overlay-left {
  transform: translateX(-20%);
}

/* Fonts */
.font-qwigley {
  font-family: 'Qwigley', cursive;
}
</style>