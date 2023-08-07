"use client";
import { ButtonProps } from "@/types/types.button";
import ButtonTemplate from "./ButtonTemplate";
import PartBtnTopLong from "@/static/parts/buttons/PartBtnTopLong";
import PartBtnBtmLong from "@/static/parts/buttons/PartBtnBtmLong";
import PartBtnBgLong from "@/static/parts/buttons/PartBtnBgLong";
const ButtonPrimaryLong = (props: ButtonProps) => {
  const color = props.disabled ? "var(--light-bg)" : "var(--primary)";
  return (
    <ButtonTemplate
      buttonTop={<PartBtnTopLong color={color} />}
      buttonBody={<PartBtnBgLong color={color} />}
      buttonBottom={<PartBtnBtmLong color={color} />}
      {...props}
    />
  );
};

export default ButtonPrimaryLong;
