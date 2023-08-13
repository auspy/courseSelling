import { CourseDetailsProps, CourseProps } from "./types.course";
import { ImgProps } from "./types.img";
import { DeviceTypeProps } from "./types.ui";

export type CardStyleProps = {
  cardClass?: string;
  cardStyle?: React.CSSProperties;
  cardImageClass?: string;
  cardImageStyle?: React.CSSProperties;
  cardTitleClass?: string;
  cardTitleStyle?: React.CSSProperties;
};

// COURSE
export type CourseCardProps = CardStyleProps & {
  course: CourseProps;
  href?: string | false;
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
  Free,
  Basic,
  Premium,
}
type PricingFeatures = {
  feature: string;
  available?: boolean;
};

export enum RotateType {
  left = "left",
  right = "right",
}
export type PricingCardProps = CardStyleProps & {
  type: PricingType;
  price: number;
  features: PricingFeatures[];
  active: PricingType;
  setActive: (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: PricingType
  ) => void;
  rotate?: RotateType | false;
  order?: 1 | 2 | 3 | "unset";
};

export type BuyNowCardProps = CardStyleProps &
  ImgProps &
  Partial<DeviceTypeProps> & {
    _id: string;
    price: number;
    courseDetails: CourseDetailsProps;
    discount?: number;
    saleAlarm?: React.ReactNode;
  };
