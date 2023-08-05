import PartBtnBody from "../../static/parts/buttons/PartBtnBody";
import PartBtnTop from "../../static/parts/buttons/PartBtnTop";
import PartBtnBtm from "../../static/parts/buttons/PartBtnBtm";
import { ButtonProps } from "@/types/types.button";
import ButtonTemplate from "./ButtonTemplate";

const Button = (props: ButtonProps) => {
  const color = props.disabled ? "var(--light-bg)" : "var(--primary)";
  return (
    <ButtonTemplate
      // width={179}
      // height={54}
      buttonTop={<PartBtnTop color={color} />}
      buttonBody={<PartBtnBody color={color} />}
      buttonBottom={<PartBtnBtm color={color} />}
      {...props}
    />
  );
};

export default Button;
