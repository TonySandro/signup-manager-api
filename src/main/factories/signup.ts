import { SignUpController } from "../../presentation/controllers/signup/signup";
import { DbAddAccount } from "../../data/usecases/add-account/db-add-account";
import { BcryptAdapter } from "../../infra/cryptography/bcrypt-adapter";
import { Controller } from "../../presentation/protocols";
import { makeSignUpValidation } from "./signup-validation";
import { AccountAxiosRequest } from "../../infra/axios/account/account-axios";

export const makeSignUpController = (): Controller => {
  const addAccountRepository = new AccountAxiosRequest();
  const bcryptAdapter = new BcryptAdapter(12);
  const addAccount = new DbAddAccount(bcryptAdapter, addAccountRepository);
  return new SignUpController(addAccount, makeSignUpValidation());
};
