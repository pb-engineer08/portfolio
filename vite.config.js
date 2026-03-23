import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/pb-engineer08/portfolio.git', // replace with your GitHub repo
  plugins: [react()],
})