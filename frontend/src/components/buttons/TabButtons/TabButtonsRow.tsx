import { useContext } from "react";
import TabButton from "./TabButton";
import { DeviceTypeContext } from "@/state/contexts/context";
import { DeviceTypeEnum } from "@/types/types.ui";

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
  const deviceType = useContext(DeviceTypeContext);
  const isDesktop = deviceType == DeviceTypeEnum.desktop;
  const smallerDevicesButtonStyle = {
    padding: 20,
    flexShrink: 0,
    width: "unset",
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: width,
        overflow: isDesktop ? "hidden" : "scroll",
      }}
      className="frc"
    >
      {buttonList?.map((value, index) => (
        <TabButton
          buttonStyle={{
            ...(isDesktop ? { padding: 0 } : smallerDevicesButtonStyle),
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
