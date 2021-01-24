import { resolve } from 'path';
// eslint-disable-next-line no-restricted-imports
import sharedConfig from '../shared/nuxt.config';
// eslint-disable-next-line no-restricted-imports
import constants from '../hub/constants';

// TODO: fix no .env file found error
// const BASE_PATH = '/';
// const PUBLIC_PATH = '/';
const distFolder = 'educators';

// const IS_DEV = process.env.NODE_ENV !== 'production';
const generateRoutes = () => {
  let cities = Object.values(constants.CITIES).map(
    ({ slug }) => `/city/${slug}/`
  );
  let stories = constants.STORIES.map(
    ({ slug }) => `/story/${slug}`
  );
  return [...stories, ...cities];
};

console.log(resolve(__dirname), '../hub');
export default {
  ...sharedConfig,
  // TODO: Need to tweak to allow educators platform assets
  alias: {
    '~': resolve(__dirname, '../hub'),
    'assets': resolve(__dirname, '../hub/assets/'),
  },
  css: ['../hub/assets/styles/main.pcss'],
  srcDir: __dirname,
  buildDir: '.nuxt/educators',
  generate: {
    dir: `dist/${distFolder}`,
    routes: generateRoutes(),
  },
  globalName: 'educators',
  build: {
    ...sharedConfig.build,
  }
};
