import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@features': new URL('./src/features', import.meta.url).pathname,
      '@services': new URL('./src/services', import.meta.url).pathname,
      '@app': new URL('./src/app', import.meta.url).pathname,
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
