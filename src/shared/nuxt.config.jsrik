const IS_DEV = process.env.NODE_ENV !== 'production';
const createResolver = require('postcss-import-resolver');
const path = require('path');
const srcDir = path.join(__dirname, 'src');
const rootDir = __dirname;

/*Additions to handle multiple repositories*/
const DevPath = 'http://localhost:3000';
const IS_EDU = process.env.npm_lifecycle_event.includes('edu');
const HubUrlPath = 'https://mathina-hub.netlify.app';
const EduUrlPath = 'https://mathina-edu.netlify.app';
//const HubUrlPath = 'http://localhost:8080';
//const EduUrlPath = 'http://localhost:8080';
const HubBase = '';
const EduBase = '';


const EduUrlCom = IS_DEV ? DevPath : EduUrlPath + EduBase;
const HubUrlCom = IS_DEV ? DevPath : HubUrlPath + HubBase;
const EduBaseCom =  IS_DEV ? '' : EduBase + '/';
const HubBaseCom =  IS_DEV ? '' : HubBase + '/';


export default {
  // mode: 'spa',
  // target: 'spa',
  ssr: false,
  target: 'static',
  env: {
    IS_DEV,
	EDU_URL: EduUrlCom,
    HUB_URL: HubUrlCom,
    BASE_URL: HubUrlCom,
  },
  router: {
	base: IS_EDU ? EduBaseCom : HubBaseCom,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3470b8', throttle: 0 },
  /*
  ** Global CSS
  */
  css: ['../shared/assets/styles/main.pcss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#3470b8'
        }
      }
    }
  },
  /*
  ** Nuxt.js modules
  */

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    [
      'nuxt-i18n', {
        // vueI18nLoader: true
      }
    ],
  ],
  axios: {
    baseURL: IS_EDU ? EduUrlCom + "/" : HubUrlCom + "/",//,
  },
  i18n: {
    locales: [
      // ISO 639-1
      { code: 'en', file: 'en.js', name: 'English' },
      { code: 'de', file: 'de.js', name: 'Deutsch' },
      { code: 'pt', file: 'pt.js', name: 'Português' },
      { code: 'it', file: 'it.js', name: 'Italiano' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    langDir: 'i18n/',
    lazy: true,
  },
  /*
  ** Build configuration
  */
  build: {
	 publicPath: IS_EDU ? EduUrlCom + "/" : HubUrlCom + "/",
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // TODO: Not sure if we need .yaml webpack loader support if loading stories via ajax
      
	  config.resolve.extensions.push('.yaml');
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      });
	  
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      });
      // TODO: If we want to load .md files at build time, but current method loads async
      // config.module.rules.push({
      //   test: /\.md$/,
      //   loaders: [
      //     'vue-loader',
      //     {
      //       loader: 'vue-md-loader',
      //       options: {
      //         plugins: [
      //           // require('markdown-it-html5-media'),
      //           require('markdown-it-table-of-contents'),
      //         ]
      //         // your preferred options
      //       }
      //     }
      //   ],
      // });
    },
    postcss: {
      plugins: {
        // https://github.com/postcss/postcss-import
        'postcss-import': {
          // With current settings required to use "./" in css files (eg. @import "./_variables.css")
          resolve: createResolver({
            alias: {
              '~': srcDir,
              '~~': rootDir,
              '@': srcDir,
              '@@': rootDir,
              '~vars': path.resolve(__dirname, `./assets/styles/base/_settings.pcss`),
            },
            modules: [srcDir, rootDir],
          }),
        },
        // https://github.com/postcss/postcss-url
        'postcss-url': {},
        // https://github.com/postcss/postcss-nested
        // Works better for forming BEM class names than postscss-nesting
        'postcss-nested': {},
        // https://github.com/MadLittleMods/postcss-css-variables
        'postcss-css-variables': {
          'preserve': true
        },
        'postcss-hexrgba': {},
        // https://github.com/csstools/postcss-preset-env
        'postcss-preset-env': {
          stage: 3,
          features: {
            'custom-media-queries': true,
            'color-mod-function': true,
          }
        },
      },
    }
  }
};
