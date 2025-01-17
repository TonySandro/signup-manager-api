import {
  AddAccountRepository,
  LoadAccountByEmailRepository,
  UpdateAccessTokenRepository,
} from "../../../data/protocols/database";
import { AccountModel } from "../../../domain/models/account";
import { AddAccountModel } from "../../../domain/usecases/add-account";

export class AccountAxiosRequest
  implements
    AddAccountRepository,
    LoadAccountByEmailRepository,
    UpdateAccessTokenRepository
{
  async add(user: AddAccountModel): Promise<AccountModel> {
    return null;
  }

  async loadByEmail(email: string): Promise<AccountModel> {
    return null;
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    return null;
  }
}
