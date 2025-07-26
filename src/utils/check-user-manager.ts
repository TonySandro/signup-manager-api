import axios from "axios";

export const checkUserManagerConnection = async (): Promise<boolean> => {
  try {
    const response = await axios.get("http://user-manager-service:5053/health");
    return response.status === 200;
  } catch {
    return false;
  }
};
