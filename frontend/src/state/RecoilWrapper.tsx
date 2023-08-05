"use client";
import { RecoilRoot } from "recoil";
const RecoilWrapper = ({ children }: React.PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilWrapper;
