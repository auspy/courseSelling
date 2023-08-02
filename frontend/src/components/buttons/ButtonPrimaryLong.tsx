import { ButtonProps } from "@/types/types.button";
import ButtonTemplate from "./ButtonTemplate";
import PartBtnTopLong from "@/static/parts/buttons/PartBtnTopLong";
import PartBtnBtmLong from "@/static/parts/buttons/PartBtnBtmLong";
import PartBtnBgLong from "@/static/parts/buttons/PartBtnBgLong";
const ButtonPrimaryLong = (props: ButtonProps) => {
  return (
    <ButtonTemplate
      buttonTop={<PartBtnTopLong />}
      buttonBody={<PartBtnBgLong />}
      buttonBottom={<PartBtnBtmLong />}
      {...props}
    />
  );
};

export default ButtonPrimaryLong;
