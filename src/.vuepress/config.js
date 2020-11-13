const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'SMIL服务用户手册',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'SMIL-Infra/user-manual',
    editLinks: true,
    docsDir: 'src',
    editLinkText: '改进此文档',
    lastUpdated: '更新时间',
    nav: [
      {
        text: '入门',
        link: '/guide/',
      },
      {
        text: '域名',
        link: '/dns/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '入门',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'client-config',
            'deps-install',
            'file-transfer',
          ]
        }
      ],
      '/dns/': [
        {
          title: '域名解析',
          collapsable: false,
          children: [
            '',
            'using',
            'all-servers',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
