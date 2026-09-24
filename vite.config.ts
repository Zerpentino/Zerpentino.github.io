import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // A GitHub user site is served from the domain root.
  base: '/',
  plugins: [react()],
})
