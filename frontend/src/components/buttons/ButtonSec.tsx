import { ButtonProps } from "@/types/types.button";
import PartBtnBg from "../../static/parts/buttons/PartBtnBg";
import styles from "../../static/styles/button.module.scss";

const ButtonSec = ({ value = "Click me" }: ButtonProps) => {
  return (
    <button>
      <div style={{ position: "relative", zIndex: 2 }}>
        <PartBtnBg />
        <div className={styles.text}>{value}</div>
      </div>
    </button>
  );
};

export default ButtonSec;
