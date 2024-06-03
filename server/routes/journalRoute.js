const {
  createJournal,
  getJournals,
  getSingleJournal,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");

const router = require("express").Router();

router.post("/create", createJournal);

router.get("/journals", getJournals);

router.get("/journal/:id", getSingleJournal);

router.put("/update/:id", updateJournal);

router.delete("/delete/:id", deleteJournal);

module.exports = router;
