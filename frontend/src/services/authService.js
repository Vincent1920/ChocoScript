
import axiosInstance from '../axios.js';

export const authService = {
  async login(credentials) {
    try {
      // Menggunakan axiosInstance, jadi path cukup '/login' saja
      const response = await axiosInstance.post('/login', credentials);
      return response.data;
    } catch (error) {
      // Menangkap pesan error dari backend atau pesan default
      throw error.response?.data?.message || error.response?.data || 'Terjadi kesalahan saat login';
    }
  },
  
  async logout() {
    // Jika backend butuh hit API logout
    return await axiosInstance.post('/logout');
  }
};