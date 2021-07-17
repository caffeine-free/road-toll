const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  birthday: String,
  city: String,
  personalRegister: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserSchema;
