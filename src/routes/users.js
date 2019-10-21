const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

module.exports = router;
