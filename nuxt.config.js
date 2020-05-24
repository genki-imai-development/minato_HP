export default {
  srcDir: 'src',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '安中市磯部の介護施設 | ほほえみの家 みなと',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '安中市磯部の介護施設 | ほほえみの家 みなとのホームページです。'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-carousel', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-NR7PM3N' }],
    ['@nuxtjs/google-analytics', { id: 'UA-167528206-1' }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  // eslint-disable-next-line no-dupe-keys
  css: ['@/assets/css/common.css'],
  // webフォントを利用
  webfontloader: {
    google: {
      families: ['Kosugi+Maru']
    }
  },
  // fontawesomeを利用
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}
