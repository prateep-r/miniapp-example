

export interface GetAccessTokenRequest {
  authCode: string;
}

export interface GetAccessTokenResponse {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  refreshToken: string;
  message: string;
  code: string;
}

