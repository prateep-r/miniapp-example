import {
  GetCustomerRequest,
  GetCustomerResponse,
} from "@/types/customer";
import { axiosOauthTokenService } from "../httpsOauthTokenService";

class CustomerService {
  auth = async (data: GetCustomerRequest) => {

    return axiosOauthTokenService.post<GetCustomerResponse>(
         "https://paotang-openapi-sandbox-uat.th-service.co.in/v1/paotangid/get-customer-profile-sandbox",
        null,
        {
          headers:{
            "Authorization": "Bearer "+data.accessToken,
          }
        }
    );
  };
}

const customerService = new CustomerService();

export default customerService;
