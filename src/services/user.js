const knex = require("../config/database");

const findAll = () => {
  return knex.select().from("users");
};

const create = user => {
  return knex("users").insert(user, "*");
};

module.exports = { findAll, create };
