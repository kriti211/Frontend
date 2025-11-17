import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Kriti_Portfolio/'   // ⚠️ write your repo name EXACTLY
})
