const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tejassaykar2001:chiplunurbun250@cluster0.lm3y3x2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MONGO GOT CONNECTED`);
  } catch (error) {
    console.log("MONGO ERROR : ", error);
  }
};

module.exports = connectDb;
