const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    loanName: {
      type: String,
      required: true,
    },
    loanCode: {
      type: Number,
      required: true,
    },
    collectionMode: {
      type: String,
      required: true,
    },
    minAmount: {
      type: Number,
      required: true,
    },
    maxAmount: {
      type: Number,
      required: true,
    },
    minTerm: {
      type: String,
      required: true,
    },
    maxTerm: {
      type: String,
      required: true,
    },
    totalTerms: {
      type: Array,
    },
    minAge: {
      type: Number,
    },
    maxAge: {
      type: Number,
    },
    minROI: {
      type: Number,
      required: true,
    },
    maxROI: {
      type: Number,
      required: true,
    },
    ROIStep: {
      type: String,
      required: true,
    },
    collectionType: {
      type: String,
      required: true,
    },
    processingFees: {
      type: Number,
      required: true,
    },
    GST: {
      type: Number,
      required: true,
    },
    legalAmount: {
      type: Number,
      required: true,
    },
    insuranceAmount: {
      type: Number,
      required: true,
    },
    fileCharges: {
      type: Number,
    },
    gracePeriod: {
      type: String,
      required: true,
    },
    fineInterest: {
      type: Number,
    },
    EMIType: {
      type: String,
      required: true,
    },
    interestOption: {
      type: String,
      required: true,
    },
    loanCollectionType: {
      type: String,
      required: true,
    },
    typeOfSecurity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("collection", collectionSchema);
