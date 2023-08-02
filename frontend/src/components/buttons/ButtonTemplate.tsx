import styles from "../../static/styles/button.module.scss";
import { ButtonTemplateProps } from "@/types/types.button";

const ButtonTemplate = ({
  value = "Click me",
  buttonStyle,
  buttonClass,
  buttonTop,
  buttonBody,
  buttonBottom,
  height,
  width,
}: ButtonTemplateProps) => {
  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          height: height,
          width: width,
          alignSelf: "flex-start",
          position: "relative",
          backgroundColor: "transparent",
          ...buttonStyle,
        }}
        className={`${styles.hover} ${styles.parent} zoom ${buttonClass}`}
      >
        <div className={styles.bottom}>{buttonBottom}</div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.text}>{value}</div>
          {buttonBody}
        </div>
        <div className={styles.top}>{buttonTop}</div>
      </button>
    </div>
  );
};

export default ButtonTemplate;
