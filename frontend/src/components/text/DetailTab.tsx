import { DetailTabProps } from "@/types/types.text";

const DetailTab = ({ title, value }: DetailTabProps) => {
  return (
    <div style={{ color: "var(--white)" }}>
      <p className="regu12" style={{ opacity: 0.7 }}>
        {title}
      </p>
      <p className="bold16 os mt10">{value}</p>
    </div>
  );
};

export default DetailTab;
