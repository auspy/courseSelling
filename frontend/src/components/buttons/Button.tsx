import PartBtnBody from "../../static/parts/buttons/PartBtnBody";
import PartBtnTop from "../../static/parts/buttons/PartBtnTop";
import PartBtnBtm from "../../static/parts/buttons/PartBtnBtm";
import { ButtonProps } from "@/types/types.button";
import ButtonTemplate from "./ButtonTemplate";

const Button = (props: ButtonProps) => {
  return (
    <ButtonTemplate
      // width={179}
      // height={54}
      buttonTop={<PartBtnTop />}
      buttonBody={<PartBtnBody />}
      buttonBottom={<PartBtnBtm />}
      {...props}
    />
  );
};

export default Button;
