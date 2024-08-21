
import customerService from "../account/customerService";
import { ApiError } from "@/types/error";
import {MutationObserverOptions, useMutation, useQueryClient,} from "react-query";
import {GetCustomerRequest, GetCustomerResponse} from "@/types/customer";

export const useMutationGetCustomer = (
  props: Omit<
    MutationObserverOptions<
      GetCustomerResponse,
        GetCustomerResponse,
        GetCustomerRequest
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: async (req: GetCustomerRequest) => {
      const resp = await customerService.auth(req);
      if (resp.status === 200) {
      } else {
        throw new ApiError(resp.data.message, resp.data.code);
      }
      return resp.data;
    },
    ...props,
  });
};
