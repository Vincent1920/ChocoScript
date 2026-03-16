import { defineStore } from 'pinia';
import { authService } from '../services/authService'; // Hubungkan ke Service

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    async loginAction(credentials) {
      // 1. Panggil Service untuk hit API
      const data = await authService.login(credentials);
      
      // 2. Simpan hasilnya di Store (State)
      this.token = data.token;
      this.user = data.user;
      
      // 3. Simpan di localStorage supaya kalau refresh tidak logout
      localStorage.setItem('token', data.token);
    }
  }
});