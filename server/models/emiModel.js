const mongoose = require("mongoose");

const emiSchema = new mongoose.Schema(
  {
    applicantName: {
      type: String,
      required: true,
    },
    loanId: {
      type: String,
      required: true,
    },
    formNo: {
      type: String,
      required: true,
    },
    memberId: {
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
    branch: {
      type: String,
      required: true,
    },
    previousLoan: {
      type: Number,
    },
    dateOfBirth: {
      type: String,
    },
    age: {
      type: Number,
    },
    gurdianName: {
      type: String,
    },
    address: {
      type: String,
    },
    pinCode: {
      type: Number,
    },
    phoneNo: {
      type: Number,
    },
    gender: {
      type: String,
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
    collectorCode: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    processingFees: {
      type: Number,
    },
    updatedDate: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
    fileCharges: {
      type: Number,
    },
    legalAmount: {
      type: Number,
    },
    GST: {
      type: Number,
    },
    insuranceAmount: {
      type: Number,
    },
    disburseAmount: {
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
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("emi", emiSchema);
