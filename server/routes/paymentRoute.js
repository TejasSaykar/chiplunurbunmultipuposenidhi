const { createPayment, getPayments, getSinglePayment, updatePayment, deletePayment } = require("../controllers/paymentController");

const router = require("express").Router();

router.post("/create", createPayment);

router.get("/payments", getPayments);

router.get("/payment/:id", getSinglePayment);

router.put("/update/:id", updatePayment);

router.delete("/delete/:id", deletePayment);

module.exports = router;
