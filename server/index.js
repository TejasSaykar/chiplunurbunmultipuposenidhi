const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const https = require("https");
const connectDb = require("./config/db");
const customerRoute = require("./routes/userRoute");
const loanRoute = require("./routes/laonRoute");
const bankRoute = require("./routes/bankRoute");
const groupRoute = require("./routes/groupRoute");
const collectionRoute = require("./routes/collectionRoute");
const withdrawRoute = require("./routes/withdrawRoute");
const depositRoute = require("./routes/depositRoute");
const journalRoute = require("./routes/journalRoute");
const receiptRoute = require("./routes/receiptRoute");
const paymentRoute = require("./routes/paymentRoute");
const authRoute = require("./routes/authRoute");

const app = express();

connectDb();
dotenv.config();

app.use(cors());
app.use(express.json());

// Routes

app.use("/api/customer", customerRoute);
app.use("/api/loan", loanRoute);
app.use("/api/bank", bankRoute);
app.use("/api/group", groupRoute);
app.use("/api/collection", collectionRoute);
app.use("/api/withdrawal", withdrawRoute);
app.use("/api/deposit", depositRoute);
app.use("/api/journal", journalRoute);
app.use("/api/receipt", receiptRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello From Chiplunurbunmultipurposenidhi");
});

// const port = process.env.PORT || 8383;
// app.listen(port, () => {
//   console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
// });

const PORT = 8484;
const appInProduction = true;
if (!appInProduction) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} ✅`);
  });
} else {
  const httpsOptions = {
    key: fs.readFileSync("./config/https/private.key"),
    cert: fs.readFileSync("./config/https/certificate.crt"),
    ca: [fs.readFileSync("./config/https/ca_bundle.crt")],
  };

  https.createServer(httpsOptions, app).listen(PORT, (error) => {
    if (error) {
      console.error("Error starting HTTPS server:", error);
    } else {
      console.log(
        `Server running on https://154-56-63-113.cprapid.com:${PORT} ✅`
      );
    }
  });
}
