import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Multi-page: index.html = 3D landing, app.html = React SPA, spline.html = Spline hero
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:   resolve(__dirname, 'index.html'),
        app:    resolve(__dirname, 'app.html'),
        spline: resolve(__dirname, 'spline.html'),
        hero:   resolve(__dirname, 'hero.html'),
      },
    },
  },
})
