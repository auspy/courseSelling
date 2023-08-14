"use client";
import { ButtonProps } from "@/types/types.button";
import PartBtnBg from "../../static/parts/buttons/PartBtnBg";
import styles from "../../static/styles/button.module.scss";
import { useState } from "react";
import { CircularProgress } from "@/components/thirdParty/mui";
import { useRouter } from "next/navigation";

const ButtonSec = ({
  value = "Click me",
  buttonClass,
  onClick,
  href,
}: ButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  if (href) {
    onClick = (e) => {
      setClicked(true);
      router.push(href);
    };
  }

  return (
    <button className={`zoom ${buttonClass}`} onClick={onClick}>
      <div style={{ position: "relative", zIndex: 2 }}>
        <PartBtnBg />
        <div className={styles.text}>
          {" "}
          {clicked ? <CircularProgress color={"inherit"} size={16} /> : value}
        </div>
      </div>
    </button>
  );
};

export default ButtonSec;
