import { PricingCardProps, PricingType } from "@/types/types.card";
import React from "react";

export const dummyPricingData = (
  active: PricingType,
  setActive: (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: PricingType
  ) => void
): { [key in PricingType]: PricingCardProps } => ({
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
});
