import STORIES from './story-meta';
import AGE_GROUPS from './age-groups';

export default {
  AGE_GROUPS,
  CITIES: {
    'island': {
      id: 'island',
      name: 'Buccaneer Island',
      slug: 'island',
      stories: ['sym-4-6', 'demo-story'],
      colorScheme: 'blue darken-1',
    },
    'logicity': {
      id: 'logicity',
      name: 'Logicity',
      slug: 'logicity',
      stories: ['sym-4-6'],
      colorScheme: 'teal lighten-1',
    },
    'birds-of-fire': {
      id: 'birds-of-fire',
      name: 'Birds of Fire',
      slug: 'birds-of-fire',
      stories: ['sym-4-6'],
      colorScheme: 'amber darken-3',
    },
    'symmetry-fair': {
      id: 'symmetry-fair',
      name: 'Symmetry Fair',
      slug: 'symmetry-fair',
      stories: ['sym-4-6'],
      colorScheme: 'purple lighten-1'
    }
  },
  STORIES,
};
