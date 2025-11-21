import axios from "axios";
import env from "../main/config/env";

export const checkUserManagerConnection = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${env.baseUrl}/health`).catch((err) => {
      console.log("Response catch error: ", err);
      return err;
    });

    return response.status === 200;
  } catch {
    console.log("checkUserManagerConnection Err");
    return false;
  }
};
