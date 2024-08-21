import JSBridgeProvider from "@/jsBridge/JSBridgeProvider";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import VConsoleWrapper from "@/app/components/VConsoleWrapper";
import {ReactQueryClientProvider} from "@/app/components/ReactQueryClientProvider";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mini App Demo",
  description: "Mini App Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={IBMPlexSans.className}>
      <ReactQueryClientProvider>
        <JSBridgeProvider>
          <div className="bg-default bg-cover bg-center">{children}</div>
        </JSBridgeProvider>
          <VConsoleWrapper />
      </ReactQueryClientProvider>
      </body>
      {/*
          If you want to open the browser console to debug your Mini App in the Mini App Webview, 
          we recommend using 'VConsole' because the browser's devtools are not available in this environment.
          
          Refer to the VConsole documentation for more information:
          https://github.com/Tencent/vConsole

          To use VConsole, uncomment the following line: */}

    </html>
  );
}
