// eslint-disable-next-line no-restricted-imports
import sharedConfig from '../shared/nuxt.config';
import constants from './constants';

// TODO: fix no .env file found error
// const BASE_PATH = '/';
// const PUBLIC_PATH = '/';
const distFolder = 'hub';

// const IS_DEV = process.env.NODE_ENV !== 'production';
const generateRoutes = () => {
  // TODO: add other locales / dedup
  const locales = ['de/', 'pt/', ''];

  let cities = [];
  let stories = [];
  for (let locale of locales) {
    let localCities = Object.values(constants.CITIES).map(
      ({ slug }) => `/${locale}city/${slug}/`
    );
    let localStories = constants.STORIES.map(
      ({ slug }) => `/${locale}story/${slug}`
    );
    cities = [...cities, ...localCities];
    stories = [...stories, ...localStories];
  }
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
