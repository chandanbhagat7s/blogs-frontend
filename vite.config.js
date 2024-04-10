import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  server: {
    proxy: {
      // "/api": "http://192.168.0.106:8000",
      "/api": "http://127.0.0.1:3000",
    }
  },
})
