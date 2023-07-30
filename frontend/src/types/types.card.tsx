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

export type CourseCardProps = CardProps & {
  img: ImgProps;
  course: CourseProps;
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
