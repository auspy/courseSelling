import "./globals.scss";
import "@/static/styles/text.scss";
import "../static/styles/common.css";
import { Open_Sans } from "next/font/google";
import { ApolloWrapper } from "@/api/graphql/ApolloWrapper";
import RecoilWrapper from "@/state/RecoilWrapper";
import ToastWrapper from "@/components/toast/ToastWrapper";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} fcc`}>
        <ApolloWrapper>
          <RecoilWrapper>
            <ToastWrapper />
            {children}
          </RecoilWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
