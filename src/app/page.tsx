"use client";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useMutationGetAccessToken} from "@/https/hooks/useMutationGetAccessToken";
import {GetAccessTokenResponse} from "@/types/accessToken";
import {useMutationGetCustomer} from "@/https/hooks/useMutationGetCustomer";
import {GetCustomerResponse} from "@/types/customer";

export default function Home() {

    const [authCode, setAuthCode] = useState<string>("")
    const [showAccessToken, setShowAccessToken] = useState<string>("")
    const [showCustomerCid, setShowCustomerCid] = useState<string>("")
    const param = useSearchParams();

    const { data: customer, mutate: getCustomer } =
        useMutationGetCustomer({
            onSuccess: (resp: GetCustomerResponse) => {
                console.log("success customer",resp)
                setShowCustomerCid(resp.cid)
            },
            onError: (error) => {
                console.log("error:", error)
                setShowCustomerCid(error.message + " [" + error.code + "]")
            },
        });

    const { data: accessToken, mutate: getAccessToken } =
        useMutationGetAccessToken({
            onSuccess: (resp: GetAccessTokenResponse) => {
                console.log("success oauth",resp)
                const accessToken = resp.access_token
                sessionStorage?.setItem("accessToken", accessToken);
                getCustomer({accessToken: accessToken})
                setShowAccessToken(accessToken)
            },
            onError: (error) => {
                console.log("error:", error)
                setShowAccessToken(error.message + " [" + error.code + "]")
            },
        });

    useEffect( () => {
        const authCode = param.get("authCode");
        if (authCode) {
            setAuthCode(authCode)
            getAccessToken({ authCode: authCode });
        }
    }, []);

  return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
          <div>Auth Code: {authCode}</div>
          <div>Access Token: {showAccessToken}</div>
          <div>CID: {showCustomerCid}</div>
          <Image
              src={"/assets/logo/mini-app-logo.svg"}
              className="logo mini-app"
              width={96}
              height={96}
              alt="Mini App logo"
          />

          <div className="flex flex-col justify-center items-center pt-14">
              <h1 className="text-3xl font-semibold">Welcome to Mini App</h1>
          </div>

      </div>
  );
}
