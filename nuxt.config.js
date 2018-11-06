const pkg = require('./package')
const { resolve } = require('path')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/index.scss',
    '@/assets/styles/global.scss',
    '@/assets/styles/sidebar.scss',
    '@/assets/styles/transition.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    '@/plugins/svg-icon.js',
    '@/plugins/mock.js',
    '@/plugins/echarts.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    //scss全局变量，mixin等自动注入到所有.vue文件中 不需要再显示import
    ['nuxt-sass-resources-loader', [
        '@/assets/styles/global.scss',
        '@/assets/styles/mixin.scss',
        '@/assets/styles/variables.scss',
    ]]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    progress:false,
    proxy: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
                fix : true
          }
        })
      }
      //svg-sprite-loader配置,
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
       
      svgRule.exclude = [resolve(__dirname, 'assets/svg')]

      config.module.rules.push({
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [resolve(__dirname, 'assets/svg')],
          options: {
            symbolId: 'icon-[name]'
          }
      })
    }
  }
}
