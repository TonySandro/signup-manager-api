import {
  LoadAccountByEmailRepository,
  UpdateAccessTokenRepository,
} from "../../../../data/protocols/database";
import { AddAccountRepository } from "../../../../data/protocols/database/add-account-repository";
import { AccountModel } from "../../../../domain/models/account";
import { AddAccountModel } from "../../../../domain/usecases/add-account";
import { AppDataSource } from "../../../../main/config/typeorm.config";
import { MysqlHelper } from "../helper/mysql-helper";

export class AccountMysqlRepository
  implements
    AddAccountRepository,
    LoadAccountByEmailRepository,
    UpdateAccessTokenRepository
{
  async add(user: AddAccountModel): Promise<AccountModel> {
    const userRepository = AppDataSource.getRepository(AccountModel);

    const newUser = userRepository.create(user);

    return await userRepository.save(newUser);
  }

  async loadByEmail(email: string): Promise<AccountModel> {
    const userCollection = await MysqlHelper.getRepository(AccountModel);
    const user = await userCollection.findOne({ where: { email } });
    return user;
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    const userCollection = await MysqlHelper.getRepository(AccountModel);
    await userCollection.update(id, { accessToken: token });
  }
}
