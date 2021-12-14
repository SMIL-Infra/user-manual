const { description } = require('../../package')
const { path } = require('@vuepress/utils')

const datasetPages = [];

module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SMIL服务用户手册',
    },
  },
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'SMIL-Infra/user-manual',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'master',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        editLinkText: '改进此文档',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      }
    },
    navbar: [
      {
        text: '入门',
        link: '/guide/',
      },
      {
        text: '域名',
        link: '/dns/'
      },
      {
        text: '认证',
        link: '/auth/'
      },
      {
        text: '存储',
        link: '/storage/'
      },
      {
        text: '数据集',
        link: '/dataset/'
      },
      {
        text: '镜像',
        link: '/mirrors'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          collapsable: false,
          children: [
            'README.md',
            'getting-started',
            'client-config',
            'deps-install',
            'file-transfer',
            'remote-server-access',
            'remote-web-access',
            'nvcc',
            'tensorboard',
          ]
        },
        {
          text: '办事流程',
          children: [
            'patent-apply',
          ]
        },
      ],
      '/dns/': [
        {
          text: '域名解析',
          collapsable: false,
          children: [
            'README.md',
            'using',
            'all-servers',
          ]
        }
      ],
      '/auth/': [
        {
          text: '统一认证',
          collapsable: false,
          children: [
            'README.md',
            'self-service',
            'migration',
            'my-local-account',
          ]
        }
      ],
      '/storage/': [
        {
          text: '分布式存储',
          collapsable: false,
          children: [
            'README.md',
            'cleanup',
            'env-install',
            'faq',
          ]
        }
      ],
      '/dataset/': [
        'index.md',
        {
          text: '数据集',
          collapsable: false,
          children: datasetPages  // To be filled by plugin
        },
      ],
    }
  },

  plugins: [
    ['@vuepress/plugin-debug'],
    [require('./datasetMgr'), { datasetPages }],
  ],
  clientAppSetupFiles: path.resolve(__dirname, './clientAppSetup.js'),
}
