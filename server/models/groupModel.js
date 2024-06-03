const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    groupCode: {
      type: Number,
      required: true,
    },
    openingDate: {
      type: String,
      required: true,
    },
    groupBranch: {
      type: String,
      required: true,
    },
    collectorCode: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    groupName: {
      type: String,
      required: true,
    },
    groupHead: {
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
    memberCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("group", groupSchema);
