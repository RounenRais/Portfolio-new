import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Projenizin kök dizine deploy edildiğini varsayarak ayar
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  build: {
    rollupOptions: {
      external: ['phantomjs']
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
