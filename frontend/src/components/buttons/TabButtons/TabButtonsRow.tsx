import TabButton from "./TabButton";
import { memo } from "react";

type TabButtonsRowProps = {
  width: number;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<any>>;
  buttonList: string[];
  buttonStyle?: React.CSSProperties;
};
const TabButtonsRow = ({
  width,
  active,
  setActive,
  buttonList,
  buttonStyle,
}: TabButtonsRowProps) => {
  return (
    <div
      style={{ width: "100%", maxWidth: width, overflow: "hidden" }}
      className="frc"
    >
      {buttonList.map((value, index) => (
        <TabButton
          buttonStyle={{
            padding: 0,
            ...buttonStyle,
          }}
          key={index + value}
          type="string"
          value={value}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default TabButtonsRow;
