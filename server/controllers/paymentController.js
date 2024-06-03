const paymentModel = require("../models/paymentModel");

exports.createPayment = async (req, res) => {
  try {
    const payment = await new paymentModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Payment Created",
      payment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating the payment",
      error,
    });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await paymentModel.find({});
    return res.status(200).json({
      success: true,
      message: "Get all payments",
      payments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the payments",
      error,
    });
  }
};

exports.getSinglePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await paymentModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single payment",
      payment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the single payment",
      error,
    });
  }
};

exports.updatePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await paymentModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Payment updated",
      payment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating the payment",
      error,
    });
  }
};

exports.deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await paymentModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Payment deleted",
      payment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the payment",
      error,
    });
  }
};
