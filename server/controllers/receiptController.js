const receiptModel = require("../models/receiptModel");

exports.createReceipt = async (req, res) => {
  try {
    const receipt = await new receiptModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Receipt Created",
      receipt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating the receipt",
      error,
    });
  }
};

exports.getReceipts = async (req, res) => {
  try {
    const receipts = await receiptModel.find({});
    return res.status(200).json({
      success: true,
      message: "Get all receipts",
      receipts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the receipts",
      error,
    });
  }
};

exports.getSingleReceipt = async (req, res) => {
  const { id } = req.params;
  try {
    const receipt = await receiptModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single receipt",
      receipt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the single receipt",
      error,
    });
  }
};

exports.updateReceipt = async (req, res) => {
  const { id } = req.params;
  try {
    const receipt = await receiptModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Receipt updated",
      receipt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating the receipt",
      error,
    });
  }
};

exports.deleteReceipt = async (req, res) => {
  const { id } = req.params;
  try {
    const receipt = await receiptModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Receipt deleted",
      receipt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the receipt",
      error,
    });
  }
};
