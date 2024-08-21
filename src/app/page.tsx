"use client";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useMutationGetAccessToken} from "@/https/hooks/useMutationGetAccessToken";
import {GetAccessTokenResponse} from "@/types/customer";

export default function Home() {

    const [authCode, setAuthCode] = useState<string>("")
    const [showAccessToken, setShowAccessToken] = useState<string>("")
    const param = useSearchParams();

    const { data: accessToken, mutate: getAccessToken } =
        useMutationGetAccessToken({
            onSuccess: (resp: GetAccessTokenResponse) => {
                const accessToken = resp.token
                sessionStorage?.setItem("accessToken", accessToken);
                setShowAccessToken(accessToken)
            },
            onError: (error) => {
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
