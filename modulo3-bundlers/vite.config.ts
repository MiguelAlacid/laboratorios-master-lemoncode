import checker from 'vite-plugin-checker'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression';

export default {
  plugins: [
    checker({
      typescript: true
    }),

    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    }),

    // GZIP
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),

    // Brotli
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 0 //
    })
  ]
}