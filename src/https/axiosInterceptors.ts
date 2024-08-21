import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ApiError } from "@/types/error";

export const requestConfig = async (config: InternalAxiosRequestConfig) => {
  const accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const handleSuccess = async (
  response: AxiosResponse,
  axiosInstance: AxiosInstance,
) => {
  return response;
};

export const handleError = (error: AxiosError) => {
  return Promise.reject(
    new ApiError(error.message, error.response?.status?.toString() || "500"),
  );
};
