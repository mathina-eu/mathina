import STORIES from './story-meta';

export default {
  AGE_GROUPS: {
    '0': {
      title: '4-6',
    },
    '1': {
      title: '7-10',
    },
    '2': {
      title: '11-14',
    },
    '3': {
      title: '15-19+',
    },
  },
  CITIES: {
    'island': {
      name: 'Buccaneer Island',
      slug: 'island',
      stories: ['sym-4-6', 'demo-story'],
    },
    'logicity': {
      name: 'Logicity',
      slug: 'logicity',
      stories: ['sym-4-6'],
    },
    'birds-of-fire': {
      name: 'Birds of Fire',
      slug: 'birds-of-fire',
      stories: ['sym-4-6'],
    },
    'symmetry-fair': {
      name: 'Symmetry Fair',
      slug: 'symmetry-fair',
      stories: ['sym-4-6'],
    }
  },
  STORIES,
};
