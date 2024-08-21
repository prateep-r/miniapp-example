

export interface GetCustomerRequest {
  accessToken: string;
}

export interface GetCustomerResponse {
  cid: string;
  mobileNo: number;
  fullnameTH: string;
  fullnameEN: string;
  code: string;
  message: string;
}
