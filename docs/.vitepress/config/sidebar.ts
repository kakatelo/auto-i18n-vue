import { DefaultTheme } from 'vitepress'

export const sidebar: Array<DefaultTheme.SidebarItem> = [
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
]
