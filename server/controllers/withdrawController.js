const withdrawModel = require("../models/withdrawModel");

exports.withdraw = async (req, res) => {
  try {
    const withdraw = await new withdrawModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Withdraw completed",
      withdraw,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating the withdrawal",
      error,
    });
  }
};

exports.getWithdrawals = async (req, res) => {
  try {
    const withdrawals = await withdrawModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all withdrawals",
      withdrawals,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the withdrawals",
      error,
    });
  }
};


exports.getSingleWithdrawal = async (req, res) => {
  const { id } = req.params;
  try {
    const withdrawal = await withdrawModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single withdrawal",
      withdrawal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the single withdrawal",
      error,
    });
  }
};

exports.updateWithdrawal = async (req, res) => {
  const { id } = req.params;
  try {
    const withdrawal = await withdrawModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Withdrawal updated",
      withdrawal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating the withdrawal",
      error,
    });
  }
};

exports.deleteWithdrawal = async (req, res) => {
  const { id } = req.params;
  try {
    const withdrawal = await withdrawModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Withdrawal deleted",
      withdrawal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the withdrawal",
      error,
    });
  }
};
