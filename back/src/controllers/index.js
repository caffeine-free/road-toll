const mongoose = require('mongoose');
const ModelOperation = require('../models/operationModel');
const ModelUser = require('../models/userModel');
const utils = require('../utils');

async function userLogin(req, res) {
  const validEmail = utils.isEmailValid(req.body.email);

  if (!validEmail) {
    const jsonResult = {
      uri: `${req.baseUrl}${req.url}`,
      result: 'Invalid email',
    };

    res.status(403).send(jsonResult);
    return;
  }

  mongoose.connection.db.collection('users', (error, collection) => {
    if (error) {
      console.error(error);
    }

    collection.findOne({ email: req.body.email }, async (err, data) => {
      if (err) {
        console.log(err);
      }

      if (data) {
        if (data.password === req.body.password) {
          res.status(200).send(data);
        } else {
          const jsonResult = {
            uri: `${req.baseUrl}${req.url}`,
            result: 'User unauthorized',
          };

          res.status(403).send(jsonResult);
        }
      } else {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'User not found',
        };

        res.status(404).send(jsonResult);
      }
    });
  });
}

async function userRegister(req, res) {
  const validEmail = utils.isEmailValid(req.body.email);

  if (!validEmail) {
    const jsonResult = {
      uri: `${req.baseUrl}${req.url}`,
      result: 'Invalid email',
    };

    res.status(403).send(jsonResult);
    return;
  }

  mongoose.connection.db.collection('users', (error, collection) => {
    if (error) {
      console.log(error);
    }

    collection.findOne({ email: req.body.email }, async (err, data) => {
      if (err) {
        console.log(err);
      }

      if (data) {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'Email already used',
        };

        res.status(409).send(jsonResult);
      } else {
        const User = mongoose.model('user', ModelUser);
        const newUser = new User({
          name: req.body.name,
          birthday: req.body.birthday,
          city: req.body.city,
          personalRegister: req.body.personalRegister,
          email: req.body.email,
          password: req.body.password,
        });

        await newUser.save();

        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'User created!',
        };

        res.status(200).send(jsonResult);
      }
    });
  });
}

async function userRecover(req, res) {
  mongoose.connection.db.collection('users', (error, collection) => {
    if (error) {
      console.error(error);
    }

    collection.findOne({ email: req.body.email }, async (err, data) => {
      if (err) {
        console.log(err);
      }

      if (data) {
        const matchEmail = data.email === req.body.email;
        const matchPersonalRegister = data.personalRegister === req.body.personalRegister;

        if (matchEmail && matchPersonalRegister) {
          data.password = req.body.password;
          const User = mongoose.model('user', ModelUser);

          User.replaceOne({ email: data.email }, data,
            null, (errorReplace) => {
              if (errorReplace) {
                console.log(errorReplace);
              }
            });

          const jsonResult = {
            uri: `${req.baseUrl}${req.url}`,
            result: 'User password updated',
          };

          res.status(200).send(jsonResult);
        } else {
          const jsonResult = {
            uri: `${req.baseUrl}${req.url}`,
            result: 'User unauthorized',
          };

          res.status(403).send(jsonResult);
        }
      } else {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'User not found',
        };

        res.status(404).send(jsonResult);
      }
    });
  });
}

async function createOperator(req, res) {
  const Operator = mongoose.model('operation', ModelOperation);
  const newOperator = new Operator({
    email: req.body.email,
    vehicleType: req.body.vehicleType,
    licensePlate: req.body.licensePlate,
    paymentMethod: req.body.paymentMethod,
    value: req.body.value,
    note: req.body.note,
  });

  await newOperator.save();

  const jsonResult = {
    uri: `${req.baseUrl}${req.url}`,
    result: 'Operator created!',
  };

  res.status(200).send(jsonResult);
}

async function reportData(req, res) {
  mongoose.connection.db.collection('operations', (err, collection) => {
    if (err) {
      console.log(err);
      return;
    }

    collection.find({}, { sort: { date: 1 } }).toArray((error, documents) => {
      if (error) {
        console.log(error);
        return;
      }

      const registerCounter = new Map();
      const categories = [];
      const series = [{
        name: 'motocycle',
        data: [],
      }, {
        name: 'car',
        data: [],
      }, {
        name: 'bus / truck',
        data: [],
      }, {
        name: 'big truck',
        data: [],
      },
      ];

      documents.forEach((element) => {
        const date = new Date(element.date);
        const formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const registerData = registerCounter.get(formatedDate);

        if (!categories.includes(formatedDate)) {
          categories.push(formatedDate);
        }

        if (registerData) {
          registerData.push(element.vehicleType);
          registerCounter.set(formatedDate, registerData);
        } else {
          registerCounter.set(formatedDate, [element.vehicleType]);
        }
      });

      if (registerCounter.size === 0) {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'There is no operations to report',
        };

        res.status(404).send(jsonResult);
      } else {
        for (let index = 0; index < registerCounter.size; index += 1) {
          const motocycles = [];
          const cars = [];
          const trucks = [];
          const bigTruck = [];
          const vehicleCounter = registerCounter.get(categories[index]);

          vehicleCounter.forEach((element) => {
            if (element === 'motocycle') {
              motocycles.push(element);
            } else if (element === 'car') {
              cars.push(element);
            } else if (element === 'bus / truck') {
              trucks.push(element);
            } else if (element === 'big truck') {
              bigTruck.push(element);
            }
          });

          series[0].data.push(motocycles.length);
          series[1].data.push(cars.length);
          series[2].data.push(trucks.length);
          series[3].data.push(bigTruck.length);
        }

        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: {
            categories,
            series,
          },
        };

        res.status(200).send(jsonResult);
      }
    });
  });
}

module.exports = {
  userLogin,
  userRegister,
  userRecover,
  createOperator,
  reportData,
};
