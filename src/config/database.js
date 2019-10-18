const knexFile = require("../../knexfile");
const knex = require("knex")(knexFile.test);

module.exports = knex;
