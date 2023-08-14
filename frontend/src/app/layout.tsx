import "./globals.scss";
import "@/static/styles/text.scss";
import "../static/styles/common.css";
import { Open_Sans, Oswald, Raleway, Merriweather } from "next/font/google";
import { ApolloWrapper } from "@/api/graphql/ApolloWrapper";
import RecoilWrapper from "@/state/RecoilWrapper";
import ToastWrapper from "@/components/toast/ToastWrapper";
import DeviceTypeWrapper from "@/helper/DeviceTypeWrapper";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>FreeCodeCamp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,700&family=Open+Sans:wght@400;600&family=Oswald:wght@400;600&family=Raleway:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${openSans.className} fcc`}>
        <ApolloWrapper>
          <RecoilWrapper>
            <DeviceTypeWrapper>
              <ToastWrapper />
              {children}
            </DeviceTypeWrapper>
          </RecoilWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
