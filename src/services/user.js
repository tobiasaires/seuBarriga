const knex = require("../config/database");

const findAll = (filter = {}) => {
  return knex
    .select()
    .where(filter)
    .from("users");
};

const create = async user => {
  if (!user.name) return { error: "Nome é um atributo obrigatorio" };
  if (!user.email) return { error: "Email é um atributo obrigatorio" };
  if (!user.password) return { error: "Senha é um atributo obrigatorio" };

  const userDb = await findAll({ email: user.email });
  if (userDb && userDb.length > 0)
    return { error: "Já existe um usuário com esse email" };
  return knex("users").insert(user, "*");
};

module.exports = { findAll, create };
