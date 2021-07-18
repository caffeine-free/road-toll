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
    password: req.body.password,
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

    collection.find({}).toArray((error, documents) => {
      if (error) {
        console.log(error);
        return;
      }

      const objects = [];

      documents.forEach((element) => {
        objects.push(element);
      });

      if (objects.length === 0) {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'There is no operations to report',
        };

        res.status(404).send(jsonResult);
      } else {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: objects,
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
