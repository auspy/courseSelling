"use client";
import { emptyButtonOnClick } from "@/helper/common";
import { ButtonProps } from "@/types/types.button";
import styles from "@/static/styles/button.module.scss";
import { CircularProgress } from "@mui/material";

const ButtonThird = ({
  value,
  onClick = emptyButtonOnClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <>
      <div className={styles.buttonThirdWrap}>
        <button
          disabled={disabled}
          className={styles.buttonThird}
          onClick={onClick}
        >
          {disabled ? <CircularProgress color={"inherit"} size={14} /> : value}
        </button>
      </div>
    </>
  );
};

export default ButtonThird;
