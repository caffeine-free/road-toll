const mongoose = require('mongoose');
const ModelOperation = require('../models/operationModel');
const ModelUser = require('../models/userModel');

async function userLogin(req, res) {
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
            result: 'user unauthorized',
          };

          res.status(403).send(jsonResult);
        }
      } else {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'user not found',
        };

        res.status(404).send(jsonResult);
      }
    });
  });
}

async function userRegister(req, res) {
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
          result: 'duplicate user',
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
          result: 'user created',
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
            result: 'user password updated',
          };

          res.status(200).send(jsonResult);
        } else {
          const jsonResult = {
            uri: `${req.baseUrl}${req.url}`,
            result: 'user unauthorized',
          };

          res.status(403).send(jsonResult);
        }
      } else {
        const jsonResult = {
          uri: `${req.baseUrl}${req.url}`,
          result: 'user not found',
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
    result: 'operator created',
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
          result: 'there is no operators in collection operations',
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
