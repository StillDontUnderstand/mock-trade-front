import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 字符串简写写法
      '/api': {
        target: 'http://192.168.142.152:8000', // 配置后端代理
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: true,                  // proxy websockets
        changeOrigin: true,        // 是否跨域
      },
    }
  }
})