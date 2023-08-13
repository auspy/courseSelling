import { DetailTabGroupProps } from "@/types/types.text";
import DetailTab from "./DetailTab";
import { DeviceTypeEnum } from "@/types/types.ui";

const DetailTabGroup = ({ data, deviceType }: DetailTabGroupProps) => {
  const isMobile = deviceType == DeviceTypeEnum.mobile;
  // console.log("detailTabGroup is ssr");
  return (
    <div
      className={`${isMobile ? "fcfs w100" : "frc"}`}
      style={{ gap: isMobile ? 10 : 50 }}
    >
      {data.map((dt, i) => (
        <DetailTab key={i + dt.title} value={dt.value} title={dt.title} />
      ))}
    </div>
  );
};

export default DetailTabGroup;
