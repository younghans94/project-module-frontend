import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: '/',
  base: '/',
  themeConfig: {
    name: 'Project Module',
    nav: [
      { title: '首页', link: '/' },
      { title: '动画组件', link: '/animate' },
      { title: '业务组件', link: '/component' },
      { title: 'React 特性', link: '/react-feature' },
      { title: 'CSS 实例', link: '/css' },
    ],
  },
  resolve: {
    docDirs: ['docs'],
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  // 确保不使用 public 目录中的 HTML
  html2sketch: false,
});

