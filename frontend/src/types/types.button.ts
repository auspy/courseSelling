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

// WAYS TO EXTEND TYPE AND INTERFACE

// export interface TabButtonProps extends ButtonProps {
//   active: boolean;
//   setActive: React.Dispatch<React.SetStateAction<string>>;
// }

export type TabButtonProps = ButtonProps & {
  setActive: React.Dispatch<React.SetStateAction<string>>;
} & (
    | {
        type: "bool";
        active: boolean;
      }
    | {
        type: "string";
        active: string;
      }
  );

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
