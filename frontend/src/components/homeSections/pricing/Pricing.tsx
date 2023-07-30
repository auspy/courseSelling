"use client";
import PricingCard from "@/components/cards/PricingCard";
import CurveSlider from "@/components/slider/CurveSlider";
import Heading from "@/components/text/Heading";
import { PricingCardProps, PricingType } from "@/types/types.card";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState(PricingType.Free);
  const pricingData: { [key in PricingType]: PricingCardProps } = {
    [PricingType.Basic]: {
      active: active,
      setActive: setActive,
      type: PricingType.Basic,
      price: 1499,
      features: [
        { feature: "Get all Free features", available: true },
        { feature: "Get all Free features Get all Free features" },
      ],
    },
    [PricingType.Free]: {
      active: active,
      setActive: setActive,
      type: PricingType.Free,
      price: 1499,
      features: [{ feature: "Get all Free features" }],
    },
    [PricingType.Premium]: {
      active: active,
      setActive: setActive,
      type: PricingType.Premium,
      price: 1499,
      features: [{ feature: "Get all Free features" }],
    },
  };
  return (
    <div className="topContainer pv100">
      <div className="fcc container1200">
        <Heading
          headingStyle={{
            maxWidth: 300,
            textAlign: "center",
          }}
          text=""
          highlightText="Pricing"
          afterHighlightText="plans tailored for you"
        />
        <div
          className="frcsb w100 mt60"
          style={{ justifyContent: "space-evenly" }}
        >
          <PricingCard {...pricingData[PricingType.Free]} />
          <PricingCard {...pricingData[PricingType.Basic]} />
          <PricingCard {...pricingData[PricingType.Premium]} />
        </div>
      </div>
      <div className="mt60">
        <CurveSlider />
      </div>
    </div>
  );
};

export default Pricing;
