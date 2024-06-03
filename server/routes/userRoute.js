const {
  customer,
  getCustomers,
  updateCustomer,
  getSingleCustomer,
  deleteCustomer,
  customersNames,
  findCustomerByName,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", customer);

router.get("/get-customers", getCustomers);

router.put("/update/:id", updateCustomer);

router.get("/single-customer/:id", getSingleCustomer);

router.delete("/delete/:id", deleteCustomer);

router.get("/customer-names", customersNames);

router.get("/find-by-name", findCustomerByName);

module.exports = router;
