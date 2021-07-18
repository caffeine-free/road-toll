/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
const state = {
  name: '',
  birthday: '',
  city: '',
  personalRegister: '',
  email: '',
  password: '',
  date: {},
};

const getters = {
  getName: state => state.name,
  getBirthday: state => state.birthday,
  getCity: state => state.city,
  getPersonalRegister: state => state.personalRegister,
  getEmail: state => state.email,
  getPassword: state => state.password,
  getDate: state => state.date,
};

const actions = {
  setUser({ commit }, payload) {
    const {
      name = '',
      birthday = '',
      city = '',
      personalRegister = '',
      email = '',
      password = '',
      date = {},
    } = payload;

    commit('setName', name);
    commit('setBirthday', birthday);
    commit('setCity', city);
    commit('setPersonalRegister', personalRegister);
    commit('setEmail', email);
    commit('setPassword', password);
    commit('setDate', date);
  },
};

const mutations = {
  setName(state, payload) {
    state.name = payload;
  },
  setBirthday(state, payload) {
    state.birthday = payload;
  },
  setCity(state, payload) {
    state.city = payload;
  },
  setPersonalRegister(state, payload) {
    state.personalRegister = payload;
  },
  setEmail(state, payload) {
    state.email = payload;
  },
  setPassword(state, payload) {
    state.password = payload;
  },
  setDate(state, payload) {
    state.date = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
