const {
  createReceipt,
  getReceipts,
  getSingleReceipt,
  updateReceipt,
  deleteReceipt,
} = require("../controllers/receiptController");

const router = require("express").Router();

router.post("/create", createReceipt);

router.get("/receipts", getReceipts);

router.get("/receipt/:id", getSingleReceipt);

router.put("/update/:id", updateReceipt);

router.delete("/delete/:id", deleteReceipt);

module.exports = router;
