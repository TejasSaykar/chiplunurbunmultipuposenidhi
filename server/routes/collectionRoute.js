const {
  createLoan,
  getLoans,
  getLoansName,
  getCollectionByName,
} = require("../controllers/collectionController");

const router = require("express").Router();

router.post("/create", createLoan);

router.get("/get-loans", getLoans);

router.get("/loan-names", getLoansName);

router.get("/collection-by-name", getCollectionByName);

module.exports = router;
