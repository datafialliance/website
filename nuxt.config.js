export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DataFI Alliance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/ef56a6304b.js', //https://fontawesome.com/icons/twitter?s=&f=brands
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: "https://fonts.gstatic.com" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap' }
    ]
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.scss',
  ],
  styleResources: {
    scss: [
      '@/assets/styles/variables/variables.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.js',
            name: 'English',
          },
        ],
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: false,
        langDir: 'assets/languages/',
        defaultLocale: 'en',
        lazy: true,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
