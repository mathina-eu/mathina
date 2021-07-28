import { resolve } from 'path';
// eslint-disable-next-line no-restricted-imports
import sharedConfig from '../shared/nuxt.config';

const distFolder = 'landing';

export default {
  ...sharedConfig,
  alias: {
    '~': resolve(__dirname, '../hub'),
    'assets': resolve(__dirname, '../landing/assets/'),
  },
  css: ['../landing/assets/styles/main.pcss'],
  srcDir: __dirname,
  buildDir: '.nuxt/landing',
  generate: {
    dir: `dist/${distFolder}`,
  },
  globalName: 'landing',
  i18n: {
    ...sharedConfig.i18n,
    langDir: '../landing/i18n/',
  },
  build: {
    ...sharedConfig.build,
  }
};
