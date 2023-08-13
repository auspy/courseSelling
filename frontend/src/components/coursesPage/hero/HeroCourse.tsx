"use client";
import BuyNowCard from "@/components/cards/BuyNowCard";
import { DeviceTypeContext } from "@/state/contexts/context";
import { HeroCourseProps } from "@/types/types.hero";
import { useContext } from "react";

const HeroCourse = ({ courseData, children }: HeroCourseProps) => {
  // console.log("is serber", isServer());
  const deviceType = useContext(DeviceTypeContext);
  const isDesktop = deviceType == "desktop";
  return (
    <div className="w100 mt40">
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
          _id={courseData._id}
        />
      </div>
    </div>
  );
};
export default HeroCourse;
