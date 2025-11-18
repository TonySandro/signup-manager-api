import axios from "axios";
import env from "../main/config/env";

export const checkUserManagerConnection = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${env.baseUrl}/health`);

    return response.status === 200;
  } catch {
    return false;
  }
};
