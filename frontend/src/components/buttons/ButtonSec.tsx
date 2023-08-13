"use client";
import { ButtonProps } from "@/types/types.button";
import PartBtnBg from "../../static/parts/buttons/PartBtnBg";
import styles from "../../static/styles/button.module.scss";
import { useState } from "react";
import { CircularProgress } from "@/components/thirdParty/mui";

const ButtonSec = ({
  value = "Click me",
  buttonClass,
  onClick,
}: ButtonProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`zoom ${buttonClass}`}
      onClick={(e) => {
        setClicked(true);
        onClick && onClick(e);
      }}
    >
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
