"use client";
import BuyNowCard from "@/components/cards/BuyNowCard";
import { ContextDeviceType } from "@/state/contexts/context";
import { ContextHeaderSticky } from "@/state/contexts/context.header";
import { HeroCourseProps } from "@/types/types.hero";
import { useContext } from "react";

const HeroCourse = ({ courseData, children }: HeroCourseProps) => {
  // console.log("is serber", isServer());
  const deviceType = useContext(ContextDeviceType);
  const sticky = useContext(ContextHeaderSticky);
  const stickyStyle: React.CSSProperties = {
    position: "fixed",
    // top: 20,
    // right: "calc(50% - 580px)",
    transform: "translate(var(--x-buynowcard), -75%)",
    // right: 0,
    zIndex: 2000,
    transition: "transform 0.4s ease",
  };
  const isDesktop = deviceType == "desktop";
  // console.log("isDesktop", sticky && isDesktop ? stickyStyle : {});
  return (
    <div className="w100 mt40" id="containerCourse">
      {/* HERO */}
      <div
        className="w100"
        style={{
          padding: "30px 20px",
          borderRadius: 5,
          backgroundColor: "var(--bg)",
          border: "1px solid var(--light-bg)",
          position: "relative",
        }}
      >
        {/* TEXT CONTAINER */}
        {isDesktop && children}
        {/* BUY BTN CONTAINER */}
        <BuyNowCard
          courseDetails={{ courseData, deviceType }}
          deviceType={deviceType}
          price={courseData.price}
          {...courseData.img}
          style={{
            ...(sticky && isDesktop ? stickyStyle : {}),
          }}
          _id={courseData._id}
        />
      </div>
    </div>
  );
};
export default HeroCourse;
