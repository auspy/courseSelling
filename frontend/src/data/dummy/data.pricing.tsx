import {
  PricingCardProps,
  PricingFeatures,
  PricingType,
} from "@/types/types.card";
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
    price: 299,
    features: basicFeatures,
  },
  [PricingType.Free]: {
    active: active,
    setActive: setActive,
    type: PricingType.Free,
    price: 0,
    features: freeFeatures,
  },
  [PricingType.Premium]: {
    active: active,
    setActive: setActive,
    type: PricingType.Premium,
    price: 599,
    features: premiumFeatures,
  },
});
const commonFeatures: PricingFeatures[] = [
  { feature: "Access to Introductory Courses", available: true },
  { feature: "Unlimited Content", available: true },
  { feature: "Regular Updates", available: true },
  { feature: "Community Support", available: false },
  { feature: "Progress Tracking", available: false },
];

const freeFeatures = commonFeatures.map((feature) => ({
  ...feature,
  available: false,
}));
freeFeatures[0].available = true;
freeFeatures[1].available = true;

const basicFeatures = commonFeatures.map((feature) => ({
  ...feature,
  available: false,
}));
basicFeatures[0].available = true;
basicFeatures[1].available = true;
basicFeatures[2].available = true;
basicFeatures[3].available = true;

const premiumFeatures = commonFeatures.map((feature) => ({
  ...feature,
  available: true,
}));
premiumFeatures[3].available = true;
