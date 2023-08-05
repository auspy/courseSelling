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
}: ButtonProps) => {
  return (
    <>
      <div
        className={`${styles.buttonThirdWrap} ${buttonClass}`}
        style={{ width: "max-content", ...buttonStyle }}
      >
        <button
          disabled={disabled}
          className={`${styles.buttonThird} ${buttonTextClass}`}
          style={{ ...buttonTextStyle }}
          onClick={onClick}
        >
          {disabled ? <CircularProgress color={"inherit"} size={14} /> : value}
        </button>
      </div>
    </>
  );
};

export default ButtonThird;
