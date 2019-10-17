const request = require("supertest");

const app = require("../src/app");

test("Deve listar todos os usuarios", async () => {
  const response = await request(app).get("/users");

  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(1);
  expect(response.body[0]).toHaveProperty("name", "Jonh Doe");
});

test("Deve inserir usuario com sucesso", async () => {
  const response = await request(app)
    .post("/users")
    .send({ name: "Walter White", mail: "walter@mail.com" });

  expect(response.status).toBe(201);
  expect(response.body.name).toBe("Walter White");
});
