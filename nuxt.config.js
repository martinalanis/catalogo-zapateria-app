import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Catalogo - %s',
    title: 'Catalogo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Zapaterías de León. ¡Siempre adelante!' },
      { hid: 'og:url', property: 'og:url', content: 'https://catalogo.zapateriasdleon.com' },
      { hid: 'og:title', property: 'og:title', content: 'Catalogo | Zapaterías de León' },
      { hid: 'og:image', property: 'og:image', content: 'https://api.zapateriasdleon.com/img/logo.png' },
      { hid: 'og:description', property: 'og:description', content: 'Zapaterías de León. ¡Siempre adelante!' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~scss/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  env: {
    urlApi: process.env.NODE_ENV !== 'production'
      ? process.env.URL_API
      : 'https://api.zapateriasdleon.com/api',
    imgPath: process.env.NODE_ENV !== 'production'
      ? process.env.IMG_PATH
      : 'https://api.zapateriasdleon.com/img'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  pageTransition: {
    name: 'slide-fade',
    mode: 'out-in'
  },

  layoutTransition: {
    name: 'slide-fade',
    mode: 'out-in'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.NODE_ENV !== 'production'
      ? process.env.URL_API
      : 'https://api.zapateriasdleon.com/api'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es'
    },
    icon: {
      fileName: 'logo.png'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  loading: {
    color: '#ffca1d'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
