"use client";
import styles from "../../static/styles/button.module.scss";
import { ButtonTemplateProps } from "@/types/types.button";
import { CircularProgress } from "@/components/thirdParty/mui";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonTemplate = ({
  value = "Click me",
  buttonStyle,
  disabled = false,
  buttonClass,
  buttonTop,
  buttonBody,
  buttonBottom,
  buttonTextClass,
  buttonTextStyle,
  height,
  href,
  onClick,
  width,
  type = "button",
  loading = false,
}: ButtonTemplateProps) => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  if (href) {
    onClick = () => {
      setClicked(true);
      router.push(href);
    };
  }
  return (
    <>
      {/* <div style={{ position: "relative" }}> */}
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={{
          height: height,
          width: width,
          alignSelf: "flex-start",
          position: "relative",
          color: disabled ? "var(--dark-bg)" : "var(--white)",
          backgroundColor: "transparent",
          ...buttonStyle,
        }}
        className={`${styles.hover} ${styles.parent} zoom ${buttonClass}`}
      >
        <div className={styles.bottom}>{buttonBottom}</div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            className={`${styles.text} ${buttonTextClass}`}
            style={{ ...buttonTextStyle }}
          >
            {loading || clicked ? (
              <CircularProgress color={"inherit"} size={16} />
            ) : (
              value
            )}
          </div>
          {buttonBody}
        </div>
        <div className={styles.top}>{buttonTop}</div>
      </button>
      {/* </div> */}
    </>
  );
};

export default ButtonTemplate;
