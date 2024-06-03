const journalModel = require("../models/journalModel");

exports.createJournal = async (req, res) => {
  try {
    const journal = await new journalModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Journal Created",
      journal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating the journal",
      error,
    });
  }
};

exports.getJournals = async (req, res) => {
  try {
    const journals = await journalModel.find({});
    return res.status(200).json({
      success: true,
      message: "Get all journals",
      journals,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the journals",
      error,
    });
  }
};

exports.getSingleJournal = async (req, res) => {
  const { id } = req.params;
  try {
    const journal = await journalModel.findById({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Getting single journal",
      journal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the single journal",
      error,
    });
  }
};

exports.updateJournal = async (req, res) => {
  const { id } = req.params;
  try {
    const journal = await journalModel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Journal updated",
      journal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating the journal",
      error,
    });
  }
};

exports.deleteJournal = async (req, res) => {
  const { id } = req.params;
  try {
    const journal = await journalModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Journal deleted",
      journal,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the journal",
      error,
    });
  }
};
