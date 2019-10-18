const request = require("supertest");

const app = require("../../src/app");

test("Deve listar todos os usuarios", async () => {
  const response = await request(app).get("/users");
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
});

test("Deve inserir usuario com sucesso", async () => {
  const email = `${Date.now()}@mail.com`;
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
