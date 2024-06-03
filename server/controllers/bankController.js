const bankModel = require("../models/bankModel");

exports.bankInfo = async (req, res) => {
  try {
    const bankInfo = await new bankModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Bank information submitted",
      bankInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while submmiting the bank information",
      error,
    });
  }
};

exports.getBankInfo = async (req, res) => {
  try {
    const bankInfo = await bankModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all bank information",
      bankInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the bank information",
      error,
    });
  }
};

exports.getSingleBankInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const bankInfo = await bankModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single bank info",
      bankInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting single info",
      error,
    });
  }
};

exports.updateSingleBankInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const bankInfo = await bankModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Single bank information updated",
      bankInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating the bank information",
      error,
    });
  }
};

exports.deleteBankInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const bankInfo = await bankModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Bank information deleted",
      bankInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the bank information",
      error,
    });
  }
};
