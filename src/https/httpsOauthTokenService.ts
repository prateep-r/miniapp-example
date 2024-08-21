import axios from "axios";
import { handleError, handleSuccess, requestConfig } from "./axiosInterceptors";

// const dltUrl = process.env.NEXT_PUBLIC_BASE_SERVICE_URL + "/dlt/api/v1";

export const axiosOauthTokenService = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

axiosOauthTokenService.interceptors.request.use(requestConfig, handleError);

axiosOauthTokenService.interceptors.response.use(
  (response) => handleSuccess(response, axiosOauthTokenService),
  handleError,
);
