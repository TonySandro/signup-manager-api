import { serviceUnavailable, success } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class HealthCheckController implements Controller {
  constructor(private readonly checkDependency: () => Promise<boolean>) {}

  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    const isUserManagerUp = await this.checkDependency();

    if (!isUserManagerUp) {
      return serviceUnavailable({ error: "User Manager API unavailable" });
    }

    return success({
      status: "success",
      dependency: "user-manager-api",
      timestamp: new Date(),
    });
  }
}
