export type ButtonProps = {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonStyle?: React.CSSProperties;
  buttonClass?: string;
  buttonTextStyle?: React.CSSProperties;
  buttonTextClass?: string;
  loading?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export type TabButtonProps = (
  | {
      type: "bool";
      active: boolean;
    }
  | {
      type: "string";
      active: string;
    }
) &
  Omit<ButtonProps, "type" | "active"> & {
    setActive: React.Dispatch<React.SetStateAction<string>>;
  };

export type ButtonTemplateProps = ButtonProps & {
  buttonTop: React.ReactNode;
  buttonBottom: React.ReactNode;
  buttonBody: React.ReactNode;
  height?: number;
  width?: number;
};

export type IconButtonProps = Omit<
  ButtonProps,
  "value" | "buttonTextClass" | "buttonTextStyle"
>;

export type ButtonDrawerToggle = IconButtonProps & {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
