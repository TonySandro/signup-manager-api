import { HealthCheckController } from "./health-check";

describe("HealthCheckController", () => {
  test("deve retornar status 200 se o banco estiver ok", async () => {
    const controller = new HealthCheckController(async () => true);
    const res = await controller.handle({});
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("deve retornar status 503 se o banco estiver indisponível", async () => {
    const controller = new HealthCheckController(async () => false);
    const res = await controller.handle({});
    expect(res.statusCode).toBe(503);
    expect(res.body.error).toBe("Database unavailable");
  });

  test("deve retornar status 503 em caso de exceção", async () => {
    const controller = new HealthCheckController(async () => {
      throw new Error();
    });
    const res = await controller.handle({});
    expect(res.statusCode).toBe(503);
    expect(res.body.error).toBe("Unexpected error");
  });
});
