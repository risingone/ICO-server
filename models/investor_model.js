const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
      },
      phone: {
        type: String,
        unique: true,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      sex: {
        type: String,
        enum: ["Male","Female"],
      },
      address: {
        type: String,
        required: true,
      },
      aadhar: {
        type: String,
        required: true,
        unique: true,
      },
      pan: {
        type: String,
        required: true,
        unique: true,
      },
      status: {
        type: String,
        enum: ["verified","pending","blocked"],
      },
      bank_details: {
        ifsc:{
            type: String
        },
        accNo: {
            type: String
        }
      },
      icos: [{
        ico_id:{
            type: String
        },
        qty:{
            type: Number
        }
      }],
});

const investor = mongoose.model("investor", schema);
module.exports = investor;