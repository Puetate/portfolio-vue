import { defineConfig } from 'vite'
import {fileURLToPath, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-vue/",
  plugins: [
      vue(),
  ],
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  }
})
