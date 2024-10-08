import {
  GetAccessTokenRequest,
  GetAccessTokenResponse,
} from "@/types/accessToken";
import authenticationService from "../account/authService";
import { ApiError } from "@/types/error";
import {MutationObserverOptions, useMutation, useQueryClient,} from "react-query";

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
      if (resp.status === 200) {
      } else {
        throw new ApiError(resp.data.message, resp.data.code);
      }
      return resp.data;
    },
    ...props,
  });
};
