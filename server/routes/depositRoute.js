const {
  deposit,
  getDeposits,
  getSingleDeposit,
  deleteDeposit,
  updateDeposit,
} = require("../controllers/depositController");

const router = require("express").Router();

router.post("/deposit", deposit);

router.get("/deposits", getDeposits);

router.get("/deposit/:id", getSingleDeposit);

router.put("/update/:id", updateDeposit);

router.delete("/delete/:id", deleteDeposit);

module.exports = router;
