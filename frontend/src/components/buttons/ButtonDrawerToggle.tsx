import { ButtonDrawerToggle } from "@/types/types.button";
import { ArrowLeft, ArrowRight } from "@/components/thirdParty/mui";

const ButtonDrawerToggle = ({
  isOpen,
  setIsOpen,
  buttonClass,
  buttonStyle,
}: ButtonDrawerToggle) => {
  return (
    <button
      style={buttonStyle}
      className={buttonClass}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen ? (
        <ArrowLeft fontSize="medium" />
      ) : (
        <ArrowRight fontSize="medium" />
      )}
    </button>
  );
};

export default ButtonDrawerToggle;
