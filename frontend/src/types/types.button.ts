export type ButtonProps = {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonStyle?: React.CSSProperties;
  buttonClass?: string;
  buttonTextStyle?: React.CSSProperties;
  buttonTextClass?: string;
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
