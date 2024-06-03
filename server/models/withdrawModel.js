const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true,
    },
    accountNo: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    chequeNo: {
      type: Number,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("withdraw", withdrawSchema);
