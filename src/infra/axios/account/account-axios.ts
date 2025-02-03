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
    return null;
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    return null;
  }
}
