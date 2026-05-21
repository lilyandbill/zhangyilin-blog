import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '张怡霖的博客',
  description: '记录一些面试准备和思考',

  themeConfig: {
    siteTitle: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '面经', link: '/interview/' },
      { text: '项目', link: '/projects/' },
      { text: '胡思乱想', link: '/thoughts/' },
      { text: '俄语', link: '/russian/' },
      { text: '英语', link: '/english/' },
      { text: 'zack', link: '/zack/' }
    ]
  }
})
