module.exports = {
  test: {
    client: "pg",
    version: "10.4",
    connection: {
      host: "localhost",
      user: "user",
      password: "pass",
      database: "db"
    },
    migrations: {
      directory: "src/migrations"
    }
  }
};
