const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    applicantName: {
      type: String,
    },
    applicantId: {
      type: mongoose.Schema.Types.ObjectId, // Assuming the applicantId in the loan model corresponds to the _id field in the customer model
      ref: "customer", // Referring to the Customer model
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
    guardianName: {
      type: String,
    },
    address: {
      type: String,
    },
    pinCode: {
      type: Number,
    },
    phoneNo: {
      type: String,
    },
    gender: {
      type: String,
    },
    customerNominee: {
      type: String,
      required: true,
    },
    customerNomineePhone: {
      type: String,
      required: true,
    },
    guaranter1: {
      type: String,
      requierd: true,
    },
    guaranter1Phone: {
      type: String,
      required: true,
    },
    guaranter1Nominee: {
      type: String,
      required: true,
    },
    guaranter1NomineePhone: {
      type: String,
      required: true,
    },
    guaranter2: {
      type: String,
      required: true,
    },
    guaranter2Phone: {
      type: String,
      required: true,
    },
    guaranter2Nominee: {
      type: String,
      required: true,
    },
    guaranter2NomineePhone: {
      type: String,
      required: true,
    },
    referedBy: {
      type: String,
      required: true,
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
      type: String,
      default: "active",
    },
    statusCount: {
      type: Number,
      default: 0,
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
    accountNo: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("loan", loanSchema);
