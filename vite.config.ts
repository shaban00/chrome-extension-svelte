import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import manifest from './src/manifest'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  const production = mode === 'production'

  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugins: [
      crx({ manifest }),
      svelte({
        compilerOptions: {
          dev: !production,
        },
        preprocess: sveltePreprocess(),
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  }
})
