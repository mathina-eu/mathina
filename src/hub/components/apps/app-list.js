const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// eslint-disable-next-line no-restricted-imports
import STORIES from '../../story-meta';

const getAppsForLocale = (locale) => {
  const appsForStories = [];

  for (let story of STORIES) {
    if (story.hidden) {
      continue;
    }
    const storyApps = [];

    const fileContents = fs.readFileSync(path.join(
      __dirname, `../../static/stories/${story.id}/actions${locale ? `-${locale}` : ''}.yaml`
    ));
    const actions = yaml.safeLoad(fileContents).actions;

    for (let action of actions) {
      if (action.type !== 'game') {
        continue;
      }
      storyApps.push(action);
    }

    appsForStories.push({
      'story': story.id,
      'apps': storyApps,
    });
  }

  return appsForStories;
};
const getAppList = () => {
  // Process all YAML files
  try {
    const locales = ['', 'de', 'it', 'pt'];

    for (let locale of locales) {
      const localeApps = getAppsForLocale(locale);
      const filePath = path.join(__dirname, `../../static/apps-list/apps${locale ? `-${locale}` : ''}.json`);
      fs.writeFileSync(filePath, JSON.stringify(localeApps));
      console.log(`Created ${filePath}`);
    }
  } catch (e) {
    console.log(e);
  }
};

export default getAppList;
