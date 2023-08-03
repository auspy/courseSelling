"use client";
import TabButtonsRow from "@/components/buttons/TabButtons/TabButtonsRow";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import Heading from "@/components/text/Heading";
import { CourseCardProps } from "@/types/types.card";
import { useState } from "react";

const Train = () => {
  const [active, setActive] = useState("Designs");
  const cardData: { [key: string]: CourseCardProps[] } = {
    Designs: [
      {
        course: {
          id: "1",
          title: "creative writing: Crafting personal essays with impact",
          price: 649,
          creator: "John Doe",
          purchaseCount: 156000,
          img: {
            img: "/images/hero/business.png",
            alt: "business",
            height: 1,
            width: 1,
          },
        },
      },
      {
        course: {
          id: "1",
          title: "creative writing: Crafting personal essays with impact",
          price: 649,
          creator: "John Doe",
          purchaseCount: 156000,
          img: {
            img: "/images/hero/business.png",
            alt: "business",
            height: 1,
            width: 1,
          },
        },
      },
    ],
  };
  return (
    <div
      className="topContainer"
      style={{
        // background: "linear-gradient(135deg, #383838 0%, #292929 100%)",
        background: "none",
      }}
    >
      <div className="container1200 fcc pv100" style={{}}>
        {/* HEADING */}
        <Heading
          headingStyle={{
            textAlign: "center",
            maxWidth: 630,
          }}
          text=""
          highlightText="Train"
          afterHighlightText="your team with real world skills and knowledge"
        />
        {/* TAB BUTTONS */}
        <div className="mt50">
          <TabButtonsRow
            width={918}
            active={active}
            setActive={setActive}
            buttonList={Object.keys(cardData)}
          />
        </div>
        {/* CARDS */}
        <CourseCardGrid
          type="row"
          gridStyle={{
            // grid: "auto/ repeat(4,minmax(260px,1fr))",
            // justifyContent: cardData[active].length == 4 ? "center" : "flex-start",
            gap: 25,
          }}
          maxItems={8}
          cardData={cardData[active]}
          gridClass="mt30"
        />
      </div>
    </div>
  );
};

export default Train;
