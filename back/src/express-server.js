const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
const routes = require('./router');
require('dotenv/config');

exports.setupApp = async function setupApp() {
  app.use(express.json());
  app.use(cors());

  app.use('/', routes);

  mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to DB!'));

  return app;
};
