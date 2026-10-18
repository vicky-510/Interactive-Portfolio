import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_REACT_APP_BACKEND_URL || 'https://vwaran.onrender.com',
          changeOrigin: true,
        },
      },
    },
  };
});
