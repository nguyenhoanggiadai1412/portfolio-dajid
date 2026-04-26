import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
   define: {
    global: 'globalThis', // 👈 fix lỗi "global is not defined"
  },
})
