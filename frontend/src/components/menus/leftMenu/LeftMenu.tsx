import { LeftMenuProps } from "@/types/types.menu";
import LeftMenuHeading from "./LeftMenuHeading";
import LeftMenuItem from "./LeftMenuItem";
import LeftMenuBottomNavi from "./LeftMenuBottomNavi";

const LeftMenu = ({
  username,
  menu,
  active,
  setActive,
  isExpanded,
  setIsExpanded,
}: LeftMenuProps) => {
  // CONTAINER STYLES
  const isExpandedContainerStyle: React.CSSProperties = { width: 310 };
  const notExpandedContainerStyle: React.CSSProperties = { width: 95 };
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    backgroundColor: "var(--dark-bg)",
    position: "fixed",
    paddingTop: 80,
    zIndex: 0,
    left: 0,
    top: 0,
    borderRight: "1px solid var(--light-bg)",
    transition: "width 0.25s ease",
  };
  return (
    <div
      style={{
        ...containerStyle,
        ...(isExpanded ? isExpandedContainerStyle : notExpandedContainerStyle),
      }}
    >
      <div
        style={{
          padding: "30px 20px",
        }}
      >
        {isExpanded && <LeftMenuHeading className="mb30" username={username} />}
        <div style={{}}>
          {menu.map((menuItem, index) => (
            <LeftMenuItem
              key={index + menuItem.name}
              {...menuItem}
              active={active}
              isExpanded={isExpanded}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
      <LeftMenuBottomNavi
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    </div>
  );
};

export default LeftMenu;
