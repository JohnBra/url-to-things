import { defineConfig } from 'vite';
import { resolve } from 'path';
import makeManifest from './utils/plugins/make-manifest';

const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@pages": pagesDir,
    },
  },
  plugins: [makeManifest()],
  publicDir,
  build: {
    outDir,
    sourcemap: process.env.__DEV__ === "true",
    rollupOptions: {
      input: {
        background: resolve(pagesDir, 'background', 'index.ts'),
      },
      output: {
        entryFileNames: (chunk) => `${chunk.name}/index.js`,
      },
    },
  },
});
