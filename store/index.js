import constants from '~/constants';

export const state = () => ({
  isAssistModeOn: false,
  ageGroup: '0',
  city: null,
  story: null,
});

export const getters = {
  cityData(state) {
    return constants.CITIES[state.city];
  }
};

export const mutations = {
  SET_ASSIST_MODE(state, newValue) {
    state.isAssistModeOn = newValue;
  },
  SET_AGE_GROUP(state, ageGroup) {
    state.ageGroup = ageGroup;
  },
  SET_CITY(state, city) {
    state.city = city;
  },
  SET_STORY(state, story) {
    state.story = story;
  }
};

export const actions = {
  toggleAssistMode({ commit, state }) {
    commit('SET_ASSIST_MODE', !state.isAssistModeOn);
  },
  setAgeGroup({ commit }, ageGroup) {
    commit('SET_AGE_GROUP', ageGroup);
  },
  setCity({ commit }, city) {
    commit('SET_CITY', city);
  },
  setStory({ commit }, story) {
    commit('SET_STORY', story);
  },
};
