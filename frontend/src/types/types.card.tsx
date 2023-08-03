import { CourseProps } from "./types.course";
import { ImgProps } from "./types.img";

export type CardProps = {
  cardClass?: string;
  cardStyle?: React.CSSProperties;
  cardImageClass?: string;
  cardImageStyle?: React.CSSProperties;
  cardTitleClass?: string;
  cardTitleStyle?: React.CSSProperties;
};

// COURSE
export type CourseCardProps = CardProps & {
  course: CourseProps;
};

export type CourseCardGridProps = {
  cardData: CourseCardProps[];
  type: "row" | "grid";
  maxItems?: number;
  gridClass?: string;
  gridStyle?: React.CSSProperties;
};

// PRICING
export enum PricingType {
  Basic = "Basic",
  Free = "Free",
  Premium = "Premium",
}
type PricingFeatures = {
  feature: string;
  available?: boolean;
};
export type PricingCardProps = CardProps & {
  type: PricingType;
  price: number;
  features: PricingFeatures[];
  active: PricingType;
  setActive: React.Dispatch<React.SetStateAction<PricingType>>;
};
