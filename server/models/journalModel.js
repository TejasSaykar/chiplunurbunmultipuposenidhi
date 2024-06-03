const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
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
    },
    bankAC: {
      type: String,
      required: true,
    },
    ledgerAC: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    remark: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("journal", journalSchema);
