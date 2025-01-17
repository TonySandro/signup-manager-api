import { SignUpController } from "../../presentation/controllers/signup/signup";
import { DbAddAccount } from "../../data/usecases/add-account/db-add-account";
import { BcryptAdapter } from "../../infra/criptography/bcrypt-adapter";
import { Controller } from "../../presentation/protocols";
import { makeSignUpValidation } from "./signup-validation";
import { AccountMysqlRepository } from "../../infra/database/mysql/account-repository/account-mysql-repository";

export const makeSignUpController = (): Controller => {
  const addAccountRepository = new AccountMysqlRepository();
  const bcryptAdapter = new BcryptAdapter(12);
  const addAccount = new DbAddAccount(bcryptAdapter, addAccountRepository);
  return new SignUpController(addAccount, makeSignUpValidation());
};
