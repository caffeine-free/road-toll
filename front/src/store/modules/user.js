/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
import {
  postData,
  END_POINT,
} from '../../../services/Api';

const state = {
  name: '',
  birthday: '',
  city: '',
  personalRegister: '',
  email: '',
  password: '',
  id: '',
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
  getId: state => state.id,
  getUser: state => state,
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
      _id = '',
      date = {},
    } = payload;

    commit('setName', name);
    commit('setBirthday', birthday);
    commit('setCity', city);
    commit('setPersonalRegister', personalRegister);
    commit('setEmail', email);
    commit('setPassword', password);
    commit('setId', _id);
    commit('setDate', date);
  },
  async Login(context, header) {
    const options = {
      header,
      endPoint: END_POINT.LOGIN,
    };
    const data = await postData(options);

    return { ...data };
  },
  async Register(context, header) {
    const options = {
      header,
      endPoint: END_POINT.REGISTER,
    };
    const data = await postData(options);

    return { ...data };
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
  setId(state, payload) {
    state.id = payload;
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
