import { memo } from "react";

const LeftMenuHeading = ({
  username,
  style,
  className,
}: {
  username: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div style={style} className={className}>
      <p className="regu14 " style={{ opacity: 0.7 }}>
        Hi!
      </p>
      <h3 className="mt5 semi caps" style={{ color: "var(--white)" }}>
        {username || "Login To Continue"}
      </h3>
    </div>
  );
};

export default memo(LeftMenuHeading);
