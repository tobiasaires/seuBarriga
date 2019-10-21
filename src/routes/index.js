const userRoutes = require("./users");
const express = require("express");

const router = express.Router();

router.use("/users", userRoutes);
router.get("/", (req, res) => {
  res.status(200).send();
});

module.exports = router;
