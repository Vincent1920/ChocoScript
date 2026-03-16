import axios from 'axios';

const instance = axios.create({
  // Mengambil URL dari file .env
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default instance;