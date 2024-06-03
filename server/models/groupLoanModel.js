const mongoose = require("mongoose");

const groupLoanSchema = new mongoose.Schema(
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
    totalPaid: {
      type: Number,
      default: 0,
    },
    advanceAmount: {
      type: Number,
      default: 0,
    },
    totalPayments: {
      type: Number,
      default: 0,
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
      required: true,
    },
    mode: {
      type: String,
      required: true,
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
      type: Number,
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
      required: true,
    },
    chequeDate: {
      type: String,
      required: true,
    },
    bankAC: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    fromAC: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("grouploan", groupLoanSchema);
