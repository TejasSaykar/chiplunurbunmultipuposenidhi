const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    dateOfJoining: {
      type: String,
      required: true,
    },
    applicationNo: {
      type: Number,
    },
    customerName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    spouseName: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    nomineeName: {
      type: String,
    },
    nomineeRelation: {
      type: String,
    },
    nomineeAge: {
      type: Number,
    },
    bloodGroup: {
      type: String,
    },
    gender: {
      type: String,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    education: {
      type: String,
    },
    occupation: {
      type: String,
    },
    branchName: {
      type: String,
    },
    acNo: {
      type: String,
    },
    bankName: {
      type: String,
    },
    ifsc: {
      type: String,
    },
    branch: {
      type: String,
    },
    panNo: {
      type: String,
    },
    electionCardNo: {
      type: String,
    },
    rationCardNo: {
      type: String,
    },
    aadharNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
