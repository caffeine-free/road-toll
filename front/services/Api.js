import axios from 'axios';

const BASE_URL = 'http://localhost:4445';
export const END_POINT = {
  LOGIN: '/login',
  REGISTER: '/register',
  RECOVER: '/recover',
  OPERATION: '/operation',
  REPORT: '/report',
};

export async function getData(endPoint) {
  let data = {};

  const baseURL = `${BASE_URL}${endPoint}`;
  const api = axios.create({
    baseURL,
  });

  await api
    .get()
    .then((response) => {
      data = response;
    })
    .catch((error) => {
      data = error;
      console.error(error.message);
    });
  return data;
}

export async function postData(options) {
  const {
    endPoint,
    header,
  } = options;

  let data = {};

  const baseURL = BASE_URL;
  const api = axios.create({
    baseURL,
  });

  await api
    .post(endPoint, header)
    .then((response) => {
      data = response;
    })
    .catch((error) => {
      data = error;
      console.log(error.message);
    });

  return data;
}
