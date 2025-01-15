import { AccountMysqlRepository } from "./account-mysql-repository";
import { MysqlHelper } from "../helper/mysql-helper";

const makeSut = () => {
  return new AccountMysqlRepository();
};

describe("Account Mysql repository", () => {
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
      "any_email@email.com"
    );
  });

  test("Should return account if success", async () => {
    const sut = makeSut();

    const user = await sut.add({
      name: "any_name",
      email: "any_email@email.com",
      password: "any_password",
    });

    expect(user).toBeTruthy();
    expect(user.name).toBe("any_name");
    expect(user.email).toBe("any_email@email.com");
    expect(user.password).toBeDefined();
  });
});
