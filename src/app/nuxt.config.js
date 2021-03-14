// eslint-disable-next-line no-restricted-imports
import sharedConfig from '../shared/nuxt.config';

// TODO: fix no .env file found error
// const BASE_PATH = '/';
// const PUBLIC_PATH = '/';
const distFolder = 'example-app';

// const IS_DEV = process.env.NODE_ENV !== 'production';

export default {
  ...sharedConfig,
  srcDir: __dirname,
  buildDir: '.nuxt/app',
  generate: {
    dir: `dist/${distFolder}`,
  },
  globalName: 'app',
  build: {
    ...sharedConfig.build,
    publicPath: '/apps/example-app/',
  }
};
