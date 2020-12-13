// eslint-disable-next-line no-restricted-imports
import sharedConfig from '../shared/nuxt.config';
import constants from './constants';

// TODO: fix no .env file found error
// const BASE_PATH = '/';
// const PUBLIC_PATH = '/';
const distFolder = 'hub';

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

export default {
  ...sharedConfig,
  srcDir: __dirname,
  buildDir: '.nuxt/hub',
  generate: {
    dir: `dist/${distFolder}`,
    routes: generateRoutes(),
  },
  globalName: 'hub',
  build: {
    ...sharedConfig.build,
  }
};
