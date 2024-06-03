const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
  {
    accountNo: {
      type: Number,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    openingAmount: {
      type: Number,
      required: true,
    },
    openingDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bank", bankSchema);
