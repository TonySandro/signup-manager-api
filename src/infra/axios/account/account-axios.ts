import {
  AddAccountRepository,
  LoadAccountByEmailRepository,
  UpdateAccessTokenRepository,
} from "../../../data/protocols/database";
import { AccountModel } from "../../../domain/models/account";
import { axiosAdapter } from "../../../main/adapters/axios/axios-adapter";
import { AddAccountModel } from "../../../domain/usecases/add-account";

export class AccountAxiosRequest
  implements
    LoadAccountByEmailRepository,
    UpdateAccessTokenRepository,
    AddAccountRepository
{
  async add(account: AddAccountModel): Promise<AccountModel> {
    const accountResponse = await axiosAdapter.post("/create-account", account);
    return accountResponse.data;
  }

  async loadByEmail(email: string): Promise<AccountModel> {
    const response = await axiosAdapter.get(
      `/get-account-by-email?email=${encodeURIComponent(email)}`
    );
    return response.data;
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    await axiosAdapter.patch("/update-access-token", {
      id,
      accessToken: token,
    });
  }
}
