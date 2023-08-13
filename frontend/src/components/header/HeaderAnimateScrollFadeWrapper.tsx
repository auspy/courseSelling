"use client";
import { useEffect, useState } from "react";
import { ContextHeaderSticky } from "@/state/contexts/context.header";

// i tried to keep header ssr but it wont have responsive design. this is why some code is shown using header as a ssr component
const HeaderAnimateScrollFadeWrapper = ({
  children,
}: React.PropsWithChildren) => {
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    // setActive(path[path.length - 1]);
    const handleHeader = () => {
      const header = document.getElementById("header");
      if (header && document.body.scrollHeight > 1400) {
        const currentScroll = window.scrollY;
        const scrollThreshold = 770;
        const fadeStart = 493; // Adjust as needed

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
      <ContextHeaderSticky.Provider value={sticky}>
        {children}
      </ContextHeaderSticky.Provider>
    </>
  );
};

export default HeaderAnimateScrollFadeWrapper;
