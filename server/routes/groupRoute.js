const {
  createGroup,
  getGroups,
  getSingleGroup,
  updateGroup,
  deleteGroup,
  groupNames,
  findByGroupName,
} = require("../controllers/groupController");

const router = require("express").Router();

router.post("/create-group", createGroup);

router.get("/all-groups", getGroups);

router.get("/single-group/:id", getSingleGroup);

router.put("/update-group/:id", updateGroup);

router.delete("/delete-group/:id", deleteGroup);

router.get("/get-group-names", groupNames);

router.get("/find-by-name", findByGroupName);

module.exports = router;
