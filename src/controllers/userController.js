const userService = require("../services/user");
const findAll = (req, res) => {
  userService.findAll().then(result => res.status(200).json(result));
};

const create = async (req, res) => {
  const result = await userService.create(req.body);
  res.status(201).json(result[0]);
};

module.exports = { findAll, create };
