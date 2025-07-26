import { Router } from "express";
import { makeSignUpController } from "../factories/signup";
import { adaptRoute } from "../adapters/express/express-route-adapter";
import { makeHealthCheckController } from "../factories/health/health-check";

export default (router: Router): void => {
  router.post("/signup", adaptRoute(makeSignUpController()));
  router.get("/health", adaptRoute(makeHealthCheckController()));
};
