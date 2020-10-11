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
    ({ slug, chapters }) => {
      let storyRoute = `/story/${slug}`;
      let chapterSlugs = Object.keys(chapters).map(chapterSlug => `${storyRoute}/${chapterSlug}`);
      return [storyRoute, ...chapterSlugs];
    }
  );
  stories = stories.reduce((acc, storySlugs) => [...acc, ...storySlugs], []);
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
