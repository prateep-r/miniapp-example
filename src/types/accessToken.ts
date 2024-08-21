

export interface GetAccessTokenRequest {
  authCode: string;
}

export interface GetAccessTokenResponse {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  message: string;
  code: string;
}
