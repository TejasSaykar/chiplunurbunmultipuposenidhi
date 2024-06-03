const userModel = require("../models/userModel");
const customerModel = require("../models/userModel");

exports.customer = async (req, res) => {
  try {
    const newCustomer = await new customerModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Registration Successfull",
      newCustomer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while customer registration",
      error,
    });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await customerModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all customers",
      customers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the customers",
      error,
    });
  }
};

exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await customerModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Customer Updated",
      customer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating the customer",
      error,
    });
  }
};

exports.getSingleCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await customerModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single user",
      customer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting single user",
      error,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await customerModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Customer deleted",
      customer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the customer",
      error,
    });
  }
};

exports.customersNames = async (req, res) => {
  try {
    const customers = await userModel.find({}, "customerName");
    const customerNames = customers.filter((customer) => customer.customerName);
    return res.status(200).json({
      success: true,
      message: "Getting all customer names",
      customerNames,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting customer names",
      error,
    });
  }
};

exports.findCustomerByName = async (req, res) => {
  const { name } = req.query;
  try {
    const customer = await userModel.find({
      customerName: new RegExp(name, "i"),
    });
    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Customer found",
      customer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the user",
      error,
    });
  }
};
