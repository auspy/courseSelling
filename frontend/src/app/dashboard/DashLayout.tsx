"use client";
import LeftMenu from "@/components/menus/leftMenu/LeftMenu";
import { dummyLeftMenuItems } from "@/data/dummy/data.menu";
import { atomUserName } from "@/state/atoms/atom.username";
import { LeftMenuItemProps } from "@/types/types.menu";
import { useContext, useState } from "react";
import { useRecoilState } from "recoil";
import HeaderDashboard from "./HeaderDashboard";
import LoginToContinue from "@/components/fallbacks/LoginToContinue";
import { ContextDeviceType } from "@/state/contexts/context";
import BottomNavigation from "@/components/menus/BottomNavigation";

interface DashLayoutProps extends React.PropsWithChildren {}
const DashLayout = ({ children }: DashLayoutProps) => {
  const [active, setActive] = useState<string>("Courses");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [userState] = useRecoilState(atomUserName);
  const deviceType = useContext(ContextDeviceType);
  const isDesktop = deviceType === "desktop";
  const menu: LeftMenuItemProps[] = dummyLeftMenuItems as LeftMenuItemProps[];
  const child = userState.role == "ADMIN" ? children : <LoginToContinue />;
  if (!isDesktop) {
    return (
      <>
        {/* Header */}
        <HeaderDashboard />
        {/* children */}
        <div
          style={{
            width: "100vw",
            paddingInline: 30,
            paddingTop: 110,
            paddingBottom: 80,
          }}
        >
          {child}
        </div>
        {/* navigation */}
        <BottomNavigation menu={menu} setActive={setActive} active={active} />
      </>
    );
  }
  return (
    <>
      {/* Header */}
      <HeaderDashboard />
      {/* left menu and page */}
      <div className="frfs">
        <LeftMenu
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          menu={menu}
          username={userState.username}
          active={active}
          setActive={setActive}
        />
        <div
          style={{
            // height: 1600,
            width: "100vw",
            paddingInlineStart: (isExpanded ? 320 : 105) + 30,
            paddingInlineEnd: 30,
            paddingTop: 110,
            paddingBottom: 80,
            transition: "padding-inline-start 0.25s ease",
          }}
        >
          {child}
        </div>
      </div>
    </>
  );
};

export default DashLayout;
