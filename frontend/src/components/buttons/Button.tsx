import PartBtnBody from "../../static/parts/buttons/PartBtnBody";
import PartBtnTop from "../../static/parts/buttons/PartBtnTop";
import PartBtnBtm from "../../static/parts/buttons/PartBtnBtm";
import styles from "../../static/styles/button.module.scss";
import { ButtonProps } from "@/types/types.button";

const Button = ({
  value = "Click me",
  buttonStyle,
  buttonClass,
}: ButtonProps) => {
  return (
    <button
      style={{
        position: "absolute",
        backgroundColor: "transparent",
        ...buttonStyle,
      }}
      className={`${styles.hover} ${styles.parent} ${buttonClass}`}
    >
      <div className={styles.bottom}>
        <PartBtnBtm />
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className={styles.text}>{value}</div>
        <PartBtnBody />
      </div>
      <div className={styles.top}>
        <PartBtnTop />
      </div>
    </button>
  );
};

export default Button;
