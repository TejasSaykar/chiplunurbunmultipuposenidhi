const registerModel = require("../models/registerModel");

exports.register = async (req, res) => {
  try {
    const register = await new registerModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Registration successfull",
      register,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while registration",
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const login = await registerModel.findOne({ email: req.body.email });
    if (!login) {
      return res.status(404).json("User Not Found");
    }

    if (login.password != req.body.password) {
      return res.status(401).json("Wrong Credentials");
    }

    return res.status(200).json({
      success: true,
      message: "Login Successfull",
      login,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while login",
      error,
    });
  }
};
