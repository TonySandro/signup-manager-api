import { AccountAxiosRequest } from "./account-axios";
import { axiosAdapter } from "../../../main/adapters/axios/axios-adapter";
import { AccountModel } from "../../../domain/models/account";

jest.mock("../../../main/adapters/axios/axios-adapter", () => ({
  axiosAdapter: {
    post: jest.fn(),
    get: jest.fn(),
    patch: jest.fn(),
  },
}));

const mockAccount: AccountModel = {
  id: "valid_id",
  name: "valid_name",
  email: "valid_email@email.com",
  password: "hashed_password",
  accessToken: "valid_token",
  createdAt: new Date("2025-01-03"),
  updatedAt: new Date("2025-01-03"),
  deletedAt: null,
};

describe("AccountAxiosRequest", () => {
  let sut: AccountAxiosRequest;

  beforeEach(() => {
    sut = new AccountAxiosRequest();
    jest.clearAllMocks();
  });

  describe("add", () => {
    test("should call axiosAdapter.post with correct values", async () => {
      (axiosAdapter.post as jest.Mock).mockResolvedValue({ data: mockAccount });

      const result = await sut.add({
        name: "valid_name",
        email: "valid_email@email.com",
        password: "valid_password",
      });

      expect(axiosAdapter.post).toHaveBeenCalledWith("/create-account", {
        name: "valid_name",
        email: "valid_email@email.com",
        password: "valid_password",
      });

      expect(result).toEqual(mockAccount);
    });
  });

  describe("loadByEmail", () => {
    test("should call axiosAdapter.get with correct email", async () => {
      (axiosAdapter.get as jest.Mock).mockResolvedValue({ data: mockAccount });

      const result = await sut.loadByEmail("valid_email@email.com");

      expect(axiosAdapter.get).toHaveBeenCalledWith(
        "/get-account-by-email?email=valid_email%40email.com"
      );

      expect(result).toEqual(mockAccount);
    });
  });

  describe("updateAccessToken", () => {
    test("should call axiosAdapter.patch with correct values", async () => {
      (axiosAdapter.patch as jest.Mock).mockResolvedValue({});

      await sut.updateAccessToken("valid_id", "new_token");

      expect(axiosAdapter.patch).toHaveBeenCalledWith("/update-access-token", {
        id: "valid_id",
        accessToken: "new_token",
      });
    });
  });
});
