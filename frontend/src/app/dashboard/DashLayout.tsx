"use client";
import LeftMenu from "@/components/menus/leftMenu/LeftMenu";
import { dummyLeftMenuItems } from "@/data/dummy/data.menu";
import { atomUserName } from "@/state/atoms/atom.username";
import { LeftMenuItemProps } from "@/types/types.menu";
import { useState } from "react";
import { useRecoilState } from "recoil";
import HeaderDashboard from "./HeaderDashboard";
import LoginToContinue from "@/components/fallbacks/LoginToContinue";

interface DashLayoutProps extends React.PropsWithChildren {}
const DashLayout = ({ children }: DashLayoutProps) => {
  const [active, setActive] = useState<string>("Courses");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [userState] = useRecoilState(atomUserName);
  return (
    <>
      {/* Header */}
      <HeaderDashboard />
      {/* left menu and page */}
      <div className="frfs">
        <LeftMenu
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          menu={dummyLeftMenuItems as LeftMenuItemProps[]}
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
          {userState.role == "ADMIN" ? children : <LoginToContinue />}
        </div>
      </div>
    </>
  );
};

export default DashLayout;
