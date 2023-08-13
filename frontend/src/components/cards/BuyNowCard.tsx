"use client";
import Image from "next/image";
import { defaultCourseImg } from "@/helper/constants.global";
import { BuyNowCardProps } from "@/types/types.card";
import PurchaseCourse from "@/components/coursesPage/PurchaseCourse";
import CourseDetails from "../coursesPage/CourseDesc";
import { useEffect } from "react";

const BuyNowCard = ({
  src = defaultCourseImg.src,
  alt = defaultCourseImg.alt,
  price,
  discount,
  style,
  _id,
  courseDetails,
  saleAlarm = (
    <>
      Hurry 😱<span className="semi"> 7 hours</span> left at this price!
    </>
  ),
}: BuyNowCardProps) => {
  // console.log("is client");
  useEffect(() => {
    const handleEvent = () => {
      const buynowCard = document.getElementById("buynowcard");
      if (buynowCard && buynowCard.parentElement) {
        let width = buynowCard.parentElement.offsetWidth - 347;
        buynowCard.style.setProperty(
          "--x-buynowcard",
          width ? `${width}px` : "853px"
        );
      }
    };
    window.addEventListener("resize", handleEvent);
    return () => {
      window.removeEventListener("resize", handleEvent);
    };
  }, []);
  const isDesktop = courseDetails.deviceType == "desktop";
  const isTablet = courseDetails.deviceType == "tablet";
  const isMobile = courseDetails.deviceType == "mobile";
  const desktopContainerStyle: React.CSSProperties = {
    width: 307,
    transform: "translate(var(--x-buynowcard), -45%)",
    position: "absolute",
  };
  const mobileContainerStyle: React.CSSProperties = {
    width: "100%",
  };
  return (
    <>
      <div
        id="buynowcard"
        className="fcc"
        style={{
          ...(isDesktop ? desktopContainerStyle : mobileContainerStyle),
          border: "1px solid #383838",
          boxShadow: "0px 5px 15px 0px rgba(4, 4, 4, 0.30)",
          borderRadius: 5,
          backgroundColor: "var(--dark-bg)",
          ...style,
        }}
      >
        <div
          style={{
            height: 176,
            width: "100%",
            position: "relative",
            borderRadius: "5px 5px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            src={src || defaultCourseImg.src}
            alt={alt || defaultCourseImg.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* BELOW IMAGE DATA */}
        <div className={`p20 w100 ${""}`}>
          {!isDesktop && <CourseDetails {...courseDetails} />}
          <div
            className={`w100 ${isTablet ? "frcsb" : isMobile && "frc"}`}
            style={{
              ...(isMobile ? { flexWrap: "wrap" } : {}),
            }}
          >
            <div className="mr15">
              <div className="frc" style={{ gap: 10 }}>
                <h3 className="os fs0">₹ {price}</h3>
                <p
                  className="regu16 os fs0"
                  style={{ textDecorationLine: "line-through" }}
                >
                  ₹ 3129
                </p>

                <p
                  className="mw bold16 fs0"
                  style={{ color: "var(--primary)" }}
                >
                  {discount || 100 - Number(((price / 3129) * 100).toFixed())}%
                  off
                </p>
              </div>
              {/* SALE ALARM */}
              <p className="regu12 mt5" style={{ color: "var(--red)" }}>
                {saleAlarm}
              </p>
            </div>
            {/* BUTTON */}
            <PurchaseCourse amount={price} _id={_id} buttonClass="mt20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNowCard;
