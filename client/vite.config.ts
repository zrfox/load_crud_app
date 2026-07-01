import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // any request starting with /api is forwarded to port 3001 rather than vite's port 5173
    // don't need to hard code port. 
    // for development. In production react files served from api origin, no proxy needed.
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
