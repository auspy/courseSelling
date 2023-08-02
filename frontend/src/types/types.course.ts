import { ImgProps } from "./types.img";

export type CourseProps = {
  id: string;
  title: string;
  price: number;
  creator: string;
  img: ImgProps;
  desc?: string;
  rating?: string;
  purchaseCount?: number;
};
