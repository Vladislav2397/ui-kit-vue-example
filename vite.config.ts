import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/components', 'src/index.ts'],
      exclude: ['**/*.stories.ts', '**/*.mdx'],
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'UiKitExample',
      fileName: 'ui-kit-example',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: 'ui-kit-example.[ext]',
      },
    },
  },
})
