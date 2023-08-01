import { DetailTabGroupProps } from "@/types/types.text";
import DetailTab from "./DetailTab";

const DetailTabGroup = ({ data }: DetailTabGroupProps) => {
  return (
    <div className="frc" style={{ gap: 50 }}>
      {data.map((dt, i) => (
        <DetailTab key={i + dt.title} value={dt.value} title={dt.title} />
      ))}
    </div>
  );
};

export default DetailTabGroup;
