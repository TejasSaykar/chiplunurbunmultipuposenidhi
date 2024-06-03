const depositModel = require("../models/depositModel");

exports.deposit = async (req, res) => {
  try {
    const deposit = await new depositModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Deposit completed",
      deposit,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating the deposit",
      error,
    });
  }
};

exports.getDeposits = async (req, res) => {
  try {
    const deposits = await depositModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all deposits",
      deposits,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the deposits",
      error,
    });
  }
};

exports.getSingleDeposit = async (req, res) => {
  const { id } = req.params;
  try {
    const deposit = await depositModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single deposit",
      deposit,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the single deposit",
      error,
    });
  }
};

exports.updateDeposit = async (req, res) => {
  const { id } = req.params;
  try {
    const deposit = await depositModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Deposit updated",
      deposit,
    });
  } catch (error) {
    console.log(object);
    return res.status(500).json({
      success: false,
      message: "Error while updating the deposit",
      error,
    });
  }
};

exports.deleteDeposit = async (req, res) => {
  const { id } = req.params;
  try {
    const deposit = await depositModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Deposit deleted",
      deposit,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the deposit",
      error,
    });
  }
};
