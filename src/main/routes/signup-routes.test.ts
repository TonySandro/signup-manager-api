import request from "supertest";
import app from "../config/app";
import { MysqlHelper } from "../../infra/database/mysql/helper/mysql-helper";

describe("Sign Up Routes Middleware", () => {
  beforeAll(async () => {
    await MysqlHelper.connect();
  });

  afterAll(async () => {
    await MysqlHelper.disconnect();
  });

  afterEach(async () => {
    await MysqlHelper.deleteEntityByField(
      "accounts",
      "email",
      "tonysduarte@gmail.com"
    );
  });

  describe("POST /signup", () => {
    test("Should return an account on success", async () => {
      await request(app)
        .post("/api/signup")
        .send({
          name: "Tony",
          email: "tonysduarte@gmail.com",
          password: "112233",
          passwordConfirmation: "112233",
        })
        .expect(200);
    });
  });
});
