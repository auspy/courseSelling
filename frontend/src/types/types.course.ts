import { ImgProps } from "./types.img";

export type CourseProps2 = {
  id: string;
  title: string;
  price: number;
  creator: string;
  img: ImgProps;
  desc?: string;
  rating?: string;
  purchaseCount?: number;
};

type Creator = {
  _id?: string;
  username?: string;
  createdCourses?: CourseProps2[];
};

type WillAddLater = {
  rating?: string;
  purchaseCount?: number;
  img: ImgProps;
};
export type CourseProps = WillAddLater & {
  _id: string;
  title: string;
  price: number;
  creator?: Creator;
  imageLink?: string;
  description?: string;
  published?: boolean;
  createdAt?: string;
  category?: string;
  __typename?: string;
};

type ResData = {
  data: CourseProps[];
  status: string;
  msg: string;
};

export interface CourseQueryProps {
  getCourse: ResData;
}

export type CoursesQueryProps = {
  getCourses: ResData;
};
