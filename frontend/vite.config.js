import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_REACT_APP_BACKEND_URL || 'https://vwaran.onrender.com',
        changeOrigin: true,
      },
    },
  },
});






















// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     port: 3000,
//     proxy:{
//       '/api':{
//         target:'https://vwaran.onrender.com',
//         changeOrigin:true,
//       }
//     }
//   }
// })
