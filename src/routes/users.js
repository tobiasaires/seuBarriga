const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const users = [
      {
        name: "Jonh Doe",
        mail: "jonh@mail.com"
      }
    ];
    res.status(200).json(users);
  })
  .post((req, res) => {
    res.status(201).send(req.body);
  });

module.exports = router;
