import {
  GetAccessTokenRequest,
  GetAccessTokenResponse,
} from "@/types/accessToken";
import { axiosOauthTokenService } from "../httpsOauthTokenService";

class AuthenticationService {
  auth = async (data: GetAccessTokenRequest) => {

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code")
    params.append("redirect_uri", "https://miniapp-example.vercel.app/init")
    params.append("client_id", "78bbe546-b209-4667-9f40-49e3a1f6c1e6")
    params.append("client_secret", "x04kLZ5hF0yLqDBHvq1TQ22qtTcrMA")
    params.append("code", data.authCode)

    return axiosOauthTokenService.post<GetAccessTokenResponse>(
         "https://paotang-id-external-uat.th-service.co.in/oauth2/token",
        params,
        {
          headers:{
            "content-type": "application/x-www-form-urlencoded",
          }
        }
    );
  };
}

const authenticationService = new AuthenticationService();

export default authenticationService;
