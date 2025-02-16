import axios from "axios";
import env from "../../config/env";

export const axiosAdapter = axios.create({
  baseURL: env.baseUrl,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});
