import { memo } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { HeaderProps } from "@/types/types.ui";
// import { useEffect, useState } from "react";

const Header = ({ style }: HeaderProps) => {
  // const path = window.location.pathname.split("/");
  // const [active, setActive] = useState(path[path.length - 1]);
  // useEffect(() => {
  //   setActive(path[path.length - 1]);
  // }, []);
  return (
    <>
      {/* <div className="topContainer"> */}
      <div className="frcsb container1200" style={{ height: 80, ...style }}>
        <Logo
        // setActive={setActive}
        />
        <Navigation
        // active={active} setActive={setActive}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default memo(Header);
