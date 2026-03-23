import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio', // replace with your GitHub repo
  plugins: [react()],
})