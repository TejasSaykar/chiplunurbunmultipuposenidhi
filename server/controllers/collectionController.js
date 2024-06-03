const collectionModel = require("../models/collectionModel");

exports.createLoan = async (req, res) => {
  try {
    const loan = await new collectionModel({
      ...req.body,
      minTerm: req.body.minTerm,
      maxTerm: req.body.maxTerm,
      totalTerms: req.body.totalTerms,
    }).save();
    return res.status(201).json({
      success: true,
      message: "Loan created",
      loan,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating the loan",
      error,
    });
  }
};

exports.getLoans = async (req, res) => {
  try {
    const loans = await collectionModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all loans",
      loans,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the loans",
      error,
    });
  }
};

exports.getLoansName = async (req, res) => {
  try {
    const loan = await collectionModel.find({}, "loanName");
    const loanNames = loan.filter((loan) => loan.loanName);
    return res.status(200).json({
      success: true,
      message: "Getting Loan",
      loanNames,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting loan names",
      error,
    });
  }
};

exports.getCollectionByName = async (req, res) => {
  const { name } = req.query;
  try {
    const collection = await collectionModel.find({
      loanName: new RegExp(name, "i"),
    });
    return res.status(200).json({
      success: true,
      message: "Getting the collection",
      collection,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the collection",
      error,
    });
  }
};
