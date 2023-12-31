import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

const pathResolve = (dir) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vitePluginVueSvgIcons(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useLoadingBar'],
        },
      ],
      dirs: [pathResolve('src/composables')],
      eslintrc: {
        enabled: true,
      },
    }),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
      exclude: ['**/_components_/*.vue'],
    }),
  ],
  build: {
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
    },
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    cors: true, // 配置为允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: false, // 支持https
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
