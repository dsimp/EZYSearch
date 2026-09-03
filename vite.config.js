import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load properly on GitHub Pages, Surge, Netlify, or any subpath
  build: {
    target: ['es2020', 'safari14', 'ios14'], // Ensures total compatibility with iPhone XS Max and mobile WebKit
    minify: 'esbuild'
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: true // Allow any incoming tunnel/domain host
  },
  preview: {
    host: true,
    port: 5173,
    allowedHosts: true // Allow any incoming tunnel/domain host
  }
})
