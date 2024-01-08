import { defineConfig } from 'vite'
import {fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-vue/",
  plugins: [
      vue(),
  ],
  build: { chunkSizeWarningLimit: 1600, },
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  }
})
