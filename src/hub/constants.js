import STORIES from './story-meta';
import AGE_GROUPS from './age-groups';

export default {
  AGE_GROUPS,
  CITIES: {
    'island': {
      id: 'island',
      name: 'Buccaneer Island',
      slug: 'island',
      stories: ['demo-story', 'bucca-1', 'bucca-2', 'bucca-3', 'bucca-4'],
      colorScheme: 'blue darken-1',
    },
    'logicity': {
      id: 'logicity',
      name: 'Logicity',
      slug: 'logicity',
      stories: ['logi-1', 'logi-2', 'logi-3', 'logi-4'],
      colorScheme: 'teal lighten-1',
    },
    'birds-of-fire': {
      id: 'birds-of-fire',
      name: 'Birds of Fire',
      slug: 'birds-of-fire',
      stories: ['fire-1', 'fire-2', 'fire-3', 'fire-4'],
      colorScheme: 'amber darken-3',
    },
    'symmetry-fair': {
      id: 'symmetry-fair',
      name: 'Symmetry Fair',
      slug: 'symmetry-fair',
      stories: ['symm-1', 'symm-2', 'symm-3', 'symm-4'],
      colorScheme: 'purple lighten-1'
    }
  },
  STORIES,
};
