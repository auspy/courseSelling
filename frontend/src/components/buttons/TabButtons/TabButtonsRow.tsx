import TabButton from "./TabButton";
import { memo } from "react";

type TabButtonsRowProps = {
  width: number;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  buttonList: string[];
};
const TabButtonsRow = ({
  width,
  active,
  setActive,
  buttonList,
}: TabButtonsRowProps) => {
  return (
    <div
      style={{ width: "100%", maxWidth: width, overflow: "hidden" }}
      className="frc"
    >
      {buttonList.map((value, index) => (
        <TabButton
          buttonStyle={{
            padding: 20,
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
