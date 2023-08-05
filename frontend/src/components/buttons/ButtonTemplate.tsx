import styles from "../../static/styles/button.module.scss";
import { ButtonTemplateProps } from "@/types/types.button";
import { CircularProgress } from "@/components/thirdParty/mui";

const ButtonTemplate = ({
  value = "Click me",
  buttonStyle,
  disabled = false,
  buttonClass,
  buttonTop,
  buttonBody,
  buttonBottom,
  height,
  onClick,
  width,
  type = "button",
  loading = false,
}: ButtonTemplateProps) => {
  return (
    <div style={{ position: "relative" }}>
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
          <div className={styles.text}>
            {loading ? <CircularProgress color={"inherit"} size={16} /> : value}
          </div>
          {buttonBody}
        </div>
        <div className={styles.top}>{buttonTop}</div>
      </button>
    </div>
  );
};

export default ButtonTemplate;
