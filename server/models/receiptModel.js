const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true,
    },
    voucherNo: {
      type: String,
      required: true,
    },
    voucherDate: {
      type: String,
      required: true,
    },
    bankAC: {
      type: String,
      required: true,
    },
    ledgerAC: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("receipt", receiptSchema);
