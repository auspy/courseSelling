"use client";

import PurchaseCourse from "@/components/coursesPage/PurchaseCourse";
import { useContext } from "react";
import { ContextHeaderSticky } from "@/state/contexts/context.header";
import { HeaderItems } from "./Header";
import { ContextDeviceType } from "@/state/contexts/context";

const CourseHeader = ({
  heading,
  purchaseCount,
  price,
  _id,
}: {
  heading: string;
  price: number;
  purchaseCount?: number;
  _id: string;
}) => {
  const sticky = useContext(ContextHeaderSticky);
  const deviceType = useContext(ContextDeviceType);
  const isDesktop = deviceType === "desktop";
  const isMobile = deviceType === "mobile";
  return (
    <>
      {sticky ? (
        <div
          id="header"
          className={`frcsb container1200  ${isMobile && "fcc"}`}
          // className={`${isTablet && "frcsb w100"} ${isMobile && "fcc w100"}`}
          style={{
            height: isDesktop ? 80 : "unset",
            padding: isDesktop ? "0 30px" : 10,
          }}
        >
          {/* course details */}
          <div className="fcfs">
            {!isMobile && (
              <h4
                className={`${!isDesktop && ""}`}
                style={{ fontSize: isDesktop ? 20 : 16 }}
              >
                {heading}
              </h4>
            )}
            {purchaseCount && isDesktop && (
              <p className="medi14 mt5" style={{ opacity: 0.7 }}>
                {purchaseCount} students enrolled
              </p>
            )}
          </div>
          {/* buy now and price */}
          {!isDesktop && (
            <div
              className={`${isMobile ? "frcsb w100" : "frc"}`}
              style={{ gap: 30 }}
            >
              <h4
                className={`${!isDesktop && ""} fs0`}
                style={{ fontSize: isDesktop ? 20 : 16 }}
              >
                ₹ {price}
              </h4>
              <PurchaseCourse amount={price} _id={_id} />
            </div>
          )}
        </div>
      ) : (
        <HeaderItems />
      )}
    </>
  );
};

export default CourseHeader;
