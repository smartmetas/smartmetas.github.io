import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SMARTMETAS.Docs",
  description: "Documentation resource",
  themeConfig: {
    logo: '/icons/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Try it free', link: 'https://smartmetas.dev', activeMatch: '/' },
      { text: 'Support us', link: '/contacts', activeMatch: '/'},
      { text: 'Contacts', items: [
          { text: 'Telegram', link: 'https://smartmetas.t.me' },
          { text: 'WhatsApp', link: 'https://wa.me/+34617466732' },
          { text: '+34 617466732', link: 'tel://+34617466732' },
        ]}
    ],

    sidebar: [
      {
        text: 'Platform',
        items: [
          { text: 'Description', link: '/description' },
          { text: 'Use cases', link: '/cases' },
          ]
      },
      {text: 'Organization',
        items: [
        { text: 'Structure', link: '/contacts' },
        { text: 'Scientific work', link: '/science' }
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'api', link: '/examples/api-examples' },
      //     { text: 'md', link: '/examples/markdown-examples' }
      //   ]
      // }
    ],

    // socialLinks: [
    //   // { icon: 'linkedin', link: 'https://linkedin.com/in/kkorotaev' }
    // ],

    footer: {
      message: 'All rights reserved',
      copyright: 'Copyright © 2022 Smartmetas'
    },
  }
})