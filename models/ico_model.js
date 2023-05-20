const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: Number,
        required: true,
      },
      total_ico: {
        type: Number,
        required: true,
      },
      sold_ico: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      farmer_id: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["approved","pending","rejected"],
      },
      crop_status: {
        type: String,
        enum: ["sown","germinated","emerged","vegetative","flowering","fruiting","harvested"]
      },
      risk_reward: {
        type: Number,
        required: true
      },
      investors: [{
        investor_id:{
            type: String
        },
        qty:{
            type: Number
        }
      }],
});

const ico = mongoose.model("ico", schema);
module.exports = ico;