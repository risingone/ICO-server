const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    txn_id: {
        type: String,
        required: true,
        unique: true
    },
    farmer_id: {
        type: String,
        required: true,
      },
      investor_id: {
        type: String,
        required: true,
      },
      ico_id: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      
      status: {
        type: String,
        // enum: ["approved","pending","rejected"],
      },
},{
    timestamps: true
}
);

const transaction = mongoose.model("transaction", schema);
module.exports = transaction;