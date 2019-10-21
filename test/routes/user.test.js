const request = require("supertest");

const app = require("../../src/app");

test("Deve listar todos os usuarios", async () => {
  const response = await request(app).get("/users");
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});

const email = `${Date.now()}@mail.com`;

test("Deve inserir usuario com sucesso", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Walter White",
      email,
      password: "123456"
    });

  expect(response.status).toBe(201);
  expect(response.body.name).toBe("Walter White");
});

test("Não deve inserir usuario sem nome", async () => {
  const response = await request(app)
    .post("/users")
    .send({ email: "teste@mail.com", password: "123456" });

  expect(response.status).toBe(400);
  expect(response.body.error).toBe("Nome é um atributo obrigatorio");
});

test("Não deve inserir usuario sem email", async () => {
  const response = await request(app)
    .post("/users")
    .send({ name: "Tobas", password: "123456" });

  expect(response.status).toBe(400);
  expect(response.body.error).toBe("Email é um atributo obrigatorio");
});

test("Não deve inserir usuario sem senha", async () => {
  const response = await request(app)
    .post("/users")
    .send({ name: "Tobas", email: "tobas@mail.com" });

  expect(response.status).toBe(400);
  expect(response.body.error).toBe("Senha é um atributo obrigatorio");
});

test("Não deve inserir usuario com email existente", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Walter White",
      email,
      password: "123456"
    });

  expect(response.status).toBe(400);
  expect(response.body.error).toBe("Já existe um usuário com esse email");
});
