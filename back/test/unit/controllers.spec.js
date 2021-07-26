/* eslint-disable no-undef */

const axios = require('axios');

describe('POST /login', () => {
  it('It responds with data of the user requested to log in', async () => {
    let data = {
      email: 'lucas@email.com',
      password: 'lucas123',
    };

    axios.post('http://127.0.0.1:4445/login', data)
      .then((response) => {
        expect(response.data).toHaveProperty('name');
        expect(response.data.name).toBe('Lucas');
        expect(response.status).toBe(200);
      });

    data = {
      email: 'lucas@email.com',
      password: 'lucas1234',
    };

    axios.post('http://127.0.0.1:4445/login', data)
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('User unauthorized');
        expect(response.response.status).toBe(403);
      });

    data = {
      email: 'lucass@email.com',
      password: 'lucas123',
    };

    axios.post('http://127.0.0.1:4445/login', data)
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('User not found');
        expect(response.response.status).toBe(404);
      });
  });
});

describe('POST /register', () => {
  it('It responds with the newly created user', () => {
    const random = Math.floor(Math.random() * (50000 - 0 + 1) + 0);

    let data = {
      name: 'Teste',
      birthday: '15/11/2021',
      city: 'Mariana',
      personalRegister: '000.000.000-00',
      email: `teste${random}@email.com`,
      password: 'teste123',
    };

    axios.post('http://127.0.0.1:4445/register', data)
      .then((response) => {
        expect(response.data).toHaveProperty('result');
        expect(response.data.result).toBe('User created!');
        expect(response.status).toBe(200);
      })
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('Email already used');
        expect(response.response.status).toBe(409);
      });

    data = {
      name: 'Teste',
      birthday: '15/11/2021',
      city: 'Mariana',
      personalRegister: '000.000.000-00',
      email: 'testeemail.com',
      password: 'teste123',
    };

    axios.post('http://127.0.0.1:4445/register', data)
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('Invalid email');
        expect(response.response.status).toBe(403);
      });

    data = {
      name: 'Teste',
      birthday: '15/11/2021',
      city: 'Mariana',
      personalRegister: '000.000.000-00',
      email: 'teste@email.com',
      password: 'teste123',
    };
  });
});

describe('POST /recover', () => {
  it('It responds with an updated user', async () => {
    let data = {
      email: 'teste@email.com',
      personalRegister: '000.000.000-00',
      password: 'teste1234',
    };

    axios.post('http://127.0.0.1:4445/recover', data)
      .then((response) => {
        expect(response.data).toHaveProperty('result');
        expect(response.data.result).toBe('User password updated');
        expect(response.status).toBe(200);
      });

    data = {
      email: 'teste@email.com',
      personalRegister: '000.010.000-00',
      password: 'teste1234',
    };

    axios.post('http://127.0.0.1:4445/recover', data)
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('User unauthorized');
        expect(response.response.status).toBe(403);
      });

    data = {
      email: '1teste@email.com',
      personalRegister: '000.000.000-00',
      password: 'teste1234',
    };

    axios.post('http://127.0.0.1:4445/recover', data)
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('User not found');
        expect(response.response.status).toBe(404);
      });
  });
});

describe('POST /operation', () => {
  it('It responds with a newly created operation', async () => {
    const data = {
      email: 'lucas@email.com',
      vehicleType: 'car',
      licensePlate: 'HFH-2062',
      paymentMethod: 'card',
      value: 3.87,
    };

    axios.post('http://127.0.0.1:4445/operation', data)
      .then((response) => {
        expect(response.data).toHaveProperty('result');
        expect(response.data.result).toBe('Operator created!');
        expect(response.status).toBe(200);
      });
  });
});

describe('GET /report', () => {
  it('It responds with an array of all operation data', async () => {
    axios.get('http://127.0.0.1:4445/report')
      .then((response) => {
        expect(response.data).toHaveProperty('result');
        expect(response.data.result).toHaveProperty('categories');
        expect(response.data.result).toHaveProperty('series');
        expect(Array.isArray(response.data.result.categories)).toBeTruthy();
        expect(Array.isArray(response.data.result.series)).toBeTruthy();
        expect(response.status).toBe(200);
      })
      .catch((response) => {
        expect(response.response.data).toHaveProperty('result');
        expect(response.response.data.result).toBe('There is no operations to report');
        expect(response.response.status).toBe(404);
      });
  });
});
