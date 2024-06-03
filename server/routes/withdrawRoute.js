const {
  withdraw,
  getWithdrawals,
  getSingleWithdrawal,
  updateWithdrawal,
  deleteWithdrawal,
} = require("../controllers/withdrawController");

const router = require("express").Router();

router.post("/withdraw", withdraw);

router.get("/withdrawals", getWithdrawals);

router.get("/withdrawal/:id", getSingleWithdrawal);

router.put("/update/:id", updateWithdrawal);

router.delete("/delete/:id", deleteWithdrawal);

module.exports = router;
