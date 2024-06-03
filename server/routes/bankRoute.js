const { bankInfo, getBankInfo, getSingleBankInfo, updateSingleBankInfo, deleteBankInfo } = require("../controllers/bankController");

const router = require("express").Router();

router.post("/create", bankInfo);

router.get("/get-bank-info", getBankInfo);

router.get("/get-single-bank/:id", getSingleBankInfo);

router.put("/update-bank-info/:id", updateSingleBankInfo);

router.delete('/delete-bank-info/:id', deleteBankInfo);

module.exports = router;