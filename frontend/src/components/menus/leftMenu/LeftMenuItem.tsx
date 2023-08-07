import { LeftMenuItemProps } from "@/types/types.menu";
import Link from "next/link";
import { memo } from "react";

const LeftMenuItem = ({
  active,
  href,
  name,
  icon,
  isExpanded,
}: LeftMenuItemProps) => {
  const isActive: boolean = active == name;
  // TEXT STYLE
  const activeStyle: React.CSSProperties = {
    color: "var(--primary)",
    fontWeight: 700,
  };
  const notActiveStyle: React.CSSProperties = {
    color: "var(--white)",
    fontWeight: 500,
  };
  // const textStyle: React.CSSProperties = {
  //   transition: "width 1.5s ease",
  // };
  // WRAPPER STYLE
  const activeWrapperStyle: React.CSSProperties = {
    backgroundColor: "var(--light-bg)",
    color: "var(--primary)",
  };
  const notActiveWrapperStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "var(--white)",
  };
  const wrapperStyle: React.CSSProperties = {
    padding: "17px",
    borderRadius: 10,
  };
  return (
    <Link
      className="frc"
      href={href}
      style={{
        ...wrapperStyle,
        ...(isActive ? activeWrapperStyle : notActiveWrapperStyle),
      }}
    >
      {/* icon */}
      {icon}
      {/* name */}
      {isExpanded && (
        <h5 className="ml15" style={isActive ? activeStyle : notActiveStyle}>
          {name}
        </h5>
      )}
    </Link>
  );
};

export default memo(LeftMenuItem);
