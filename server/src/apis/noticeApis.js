import axiosInstance from "../util/axios";
import { authHeader } from "./apiUtils";

export const getAlertList = () => {
  const auth = authHeader();

  if (auth) {
    return axiosInstance.get("notices", {
      headers: auth,
    });
  }
};
