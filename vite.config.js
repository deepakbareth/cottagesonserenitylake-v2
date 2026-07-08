import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/cottagesonserenitylake-v2/",
  plugins: [react()],
})
