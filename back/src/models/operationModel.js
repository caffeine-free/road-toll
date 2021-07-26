const mongoose = require('mongoose');

const OperationSchema = mongoose.Schema({
  email: String,
  vehicleType: String,
  licensePlate: String,
  paymentMethod: String,
  value: Number,
  note: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = OperationSchema;
