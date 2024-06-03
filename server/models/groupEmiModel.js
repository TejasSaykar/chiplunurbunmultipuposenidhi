const mongoose = require("mongoose");

const groupEmiSchema = new mongoose.Schema(
  {
    loanId: {
      type: String,
      required: true,
    },
    formNo: {
      type: String,
      required: true,
    },
    groupId: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: String,
    },
    payDate: {
      type: String,
    },
    groupName: {
      type: String,
    },
    groupHead: {
      type: String,
    },
    branchName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    PIN: {
      type: Number,
    },
    phoneNo: {
      type: Number,
    },
    productName: {
      type: String,
      required: true,
    },
    loanTerm: {
      type: String,
      required: true,
    },
    term: {
      type: String,
    },
    mode: {
      type: String,
    },
    loanAmount: {
      type: Number,
      required: true,
    },
    ROI: {
      type: Number,
    },
    EMI: {
      type: Number,
      required: true,
    },
    interestType: {
      type: String,
    },
    processingFees: {
      type: Number,
    },
    updatedDate: {
      type: String,
    },
    legalAmount: {
      type: Number,
    },
    serviceTax: {
      type: String,
    },
    insuranceAmount: {
      type: Number,
    },
    paymentBy: {
      type: String,
      required: true,
    },
    chequeNo: {
      type: String,
    },
    chequeDate: {
      type: String,
    },
    bankAC: {
      type: String,
    },
    bankName: {
      type: String,
    },
    fromAC: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("groupemi", groupEmiSchema);
