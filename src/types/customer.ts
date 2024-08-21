

export interface GetAccessTokenRequest {
  authCode: string;
}

export interface GetAccessTokenResponse {
  code: string;
  message: string;
  token: string;
}

