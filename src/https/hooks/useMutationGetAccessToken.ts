import {
  GetAccessTokenRequest,
  GetAccessTokenResponse,
} from "@/types/customer";
import authenticationService from "../account/authService";
import { ApiError } from "@/types/error";
import {MutationObserverOptions, useMutation} from "react-query";

export const useMutationGetAccessToken = (
  props: Omit<
    MutationObserverOptions<
      GetAccessTokenResponse,
      GetAccessTokenResponse,
      GetAccessTokenRequest
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: async (req: GetAccessTokenRequest) => {
      const resp = await authenticationService.auth(req);
      if (resp.status === 200 && resp.data.code === "0000") {
      } else {
        throw new ApiError(resp.data.message, resp.data.code);
      }
      return resp.data;
    },
    ...props,
  });
};
