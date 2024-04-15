import { defineConfig } from 'vitepress'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2024-viteprss-blog/',
  title: 'viteprss-blog',
  description: 'VitePress',
  themeConfig: {
    nav: navbar,
    sidebar: sidebar,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/kakatelo/2024-viteprss-blog'
      }
    ]
  }
})
