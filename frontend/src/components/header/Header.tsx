"use client";
import { memo, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { HeaderProps } from "@/types/types.ui";
import { useRecoilState } from "recoil";
import { atomUserName } from "@/state/atoms/atom.username";
// import { useEffect, useState } from "react";

// i tried to keep header ssr but it wont have responsive design. this is why some code is shown using header as a ssr component
const Header = ({ style }: HeaderProps) => {
  // const path = window.location.pathname.split("/");
  // const [active, setActive] = useState(path[path.length - 1]);
  const [sticky, setSticky] = useState<boolean>(false);
  const [userState] = useRecoilState(atomUserName);
  const loggedIn = userState.username != "" && userState.role != "";
  useEffect(() => {
    // setActive(path[path.length - 1]);
    const handleHeader = () => {
      const header = document.getElementById("header");
      if (header) {
        const currentScroll = window.scrollY;
        const scrollThreshold = 770;
        const fadeStart = 570; // Adjust as needed

        // header opacity increases from 0 to 1 between 570 and 770 pixels
        const opacity =
          (currentScroll - fadeStart) / (scrollThreshold - fadeStart);
        if (currentScroll >= fadeStart && opacity <= 3) {
          header.style.opacity = opacity.toFixed(2);
        } else if (currentScroll >= 100 && currentScroll <= 250) {
          // header opacity gets set to 0 between 100 and 200 pixels. so that it can start from 0 and then increase for effect
          // there is a gap in pixels because sometimes users scroll fast and skip some pixels
          header.style.opacity = "0";
        } else if (currentScroll < 100) {
          // header opacity gets set to 0 below 100 pixels
          header.style.opacity = "1";
        }
        // header gets sticky after 570 pixels
        if (window.scrollY >= fadeStart) {
          header.classList.add("sticky");
          document.body.style.paddingTop = "80px";
          setSticky(true);
        } else {
          header.classList.remove("sticky");
          document.body.style.paddingTop = "0px";
          setSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleHeader);
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);
  return (
    <>
      {/* <div className="topContainer"> */}
      <div
        id="header"
        className={`frcsb container1200`}
        style={{ height: 80, ...style }}
      >
        <Logo
        // setActive={setActive}
        />
        <Navigation
          sticky={sticky && loggedIn}
          // active={active} setActive={setActive}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default memo(Header);
