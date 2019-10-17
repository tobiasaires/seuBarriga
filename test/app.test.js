const request = require("supertest");

const app = require("../src/app");

test("Deve Responder Na Raiz do Projeto", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(200);
});
