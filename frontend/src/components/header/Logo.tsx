"use client";
import Link from "next/link";
import { memo } from "react";

type LogoProps = {
  // setActive: React.Dispatch<React.SetStateAction<string>>;
  style?: React.CSSProperties;
  logoClass?: string;
};
const Logo = ({ style, logoClass }: LogoProps) => {
  return (
    <>
      <Link
        href={"/"}
        id="logo"
        className={`${logoClass}`}
        style={style}
        // onClick={() => setActive("")}
      >
        Skillz
      </Link>
    </>
  );
};

export default memo(Logo);
