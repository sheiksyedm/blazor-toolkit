import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@features': new URL('./src/features', import.meta.url).pathname,
      '@services': new URL('./src/services', import.meta.url).pathname,
      '@app': new URL('./src/app', import.meta.url).pathname,
    },
  },
})
