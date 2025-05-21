import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace `your-repo-name` with the exact name of your GitHub repo
export default defineConfig({
  base: '/portfolio/', // if your repo is github.com/yourname/portfolio
  plugins: [vue()]
})
