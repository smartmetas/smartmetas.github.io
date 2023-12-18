import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "SMARTMETAS Docs",
  description: "Documentation resource",
  head: [
    ['link', { rel: "logo", type: "image/png", sizes: "100x100", href: "/icons/logo.svg"}]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },
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
