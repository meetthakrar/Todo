import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensures assets are loaded correctly on Vercel's deployment URLs
  base: '/', 
  build: {
    // Explicitly naming the output directory to match Vercel's expectations
    outDir: 'dist',
  },
})