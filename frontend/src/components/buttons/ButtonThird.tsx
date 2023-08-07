"use client";
import { emptyButtonOnClick } from "@/helper/common";
import { ButtonProps } from "@/types/types.button";
import styles from "@/static/styles/button.module.scss";
import { CircularProgress } from "@/components/thirdParty/mui";

const ButtonThird = ({
  value,
  onClick = emptyButtonOnClick,
  disabled = false,
  buttonClass,
  buttonStyle,
  buttonTextClass,
  buttonTextStyle,
  loading,
}: ButtonProps) => {
  const disabledStyle: React.CSSProperties = disabled
    ? {
        color: "#fafafa40",
        borderColor: "var(--light-bg)",
        backgroundColor: "var(--dark-bg)",
      }
    : {};
  const disabledStyleWrapper: React.CSSProperties = disabled
    ? {
        background: "var(--dark-bg)",
      }
    : {};
  return (
    <>
      <div
        className={`${styles.buttonThirdWrap} ${buttonClass}`}
        style={{
          width: "max-content",
          ...buttonStyle,
          ...disabledStyleWrapper,
        }}
      >
        <button
          disabled={disabled}
          className={`${styles.buttonThird} ${buttonTextClass}`}
          style={{ ...buttonTextStyle, ...disabledStyle }}
          onClick={onClick}
        >
          {loading ? <CircularProgress color={"inherit"} size={14} /> : value}
        </button>
      </div>
    </>
  );
};

export default ButtonThird;
