module.exports = {
  base: '/vuex-objectify/',
  port: 8888,
  title: 'vuex-objectify',
  description: 'Creating an interface to communicate with the vuex store',
  head: [
    ['link', { rel: "icon", href: "/favicon.ico"}],
    ['meta', { name: "viewport"}],
  ],
  theme: '@vuepress/theme-default',
  plugins: ['@vuepress/register-components'],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/install' },
      { text: 'GitHub', link: 'https://github.com/dannyyassine/vuex-objectify' }
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',   // required
          collapsable: false, // optional, defaults to true
          children: [
            ['guide/install', 'Installation']
          ]
        },
        {
          title: 'Usage',   // required
          collapsable: false, // optional, defaults to true
          children: [
            ['guide/requirement', 'Requirement'],
            ['guide/usage', 'Basic'],
            ['guide/submodules', 'Sub-Modules'],
            ['guide/access_from_console', 'Javascript Console'],
            ['guide/how', 'How does it work?']
          ]
        },
        {
          title: 'Api',   // required
          collapsable: false, // optional, defaults to true
          children: [
            ['guide/plugin_options', 'Plugin Options'],
          ]
        }
      ]
    }
  }
}