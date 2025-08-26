import { HealthCheckController } from "../../../presentation/controllers/health/health-check";
import { Controller } from "../../../presentation/protocols";
import { checkUserManagerConnection } from "../../../utils/check-user-manager";

export const makeHealthCheckController = (): Controller => {
  return new HealthCheckController(checkUserManagerConnection);
};
