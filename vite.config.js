import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      /* options */
      dirs: ['src/components', 'src/views'],
      extensions: ['vue'],
    }),
    AutoImport({
      /* options */
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
    }),
    Pages({
      dirs: 'src/views',
    }),
  ],
})
