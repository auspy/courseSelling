import { getCreatedCourses } from "@/api/graphql/gql";
import { ImgProps } from "./types.img";
import { CourseCardProps } from "./types.card";
import { DeviceTypeProps } from "./types.ui";

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

export enum CategoryEnum {
  design = "design",
  development = "development",
  marketing = "marketing",
  business = "business",
  photography = "photography",
  music = "music",
  healthFitness = "healthFitness",
  teacherTraining = "teacherTraining",
  academics = "academics",
  language = "language",
  // it = "it",
  // personalDevelopment = "personalDevelopment",
  // lifestyle = "lifestyle",
  // testPrep = "testPrep",
}
type WillAddLater = {
  rating?: string;
  purchaseCount?: number;
  img: ImgProps;
  benefits?: string[];
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
  category?: CategoryEnum;
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
  getCourses?: ResData;
  getPurchasedCourses?: ResData;
  getCreatedCourses?: ResData;
};

export type FormCourse = Omit<
  CourseProps,
  "_id" | "creator" | "__typename" | "title" | "price" | "img"
> & {
  title?: string;
  _id?: string;
  price?: number;
};

export type UpdateCourseInputProps = Omit<FormCourse, "_id" | "createdAt">;
export type CreateCourseInputProps = Omit<
  UpdateCourseInputProps,
  "title" | "price" | "category"
> & {
  title: string;
  price: number;
  category: CategoryEnum;
};

export type CourseCategorySortedProps = {
  [key in CategoryEnum]: CourseCardProps[];
};

export interface CourseDetailsProps extends DeviceTypeProps {
  courseData: CourseProps;
  styleContainer?: React.CSSProperties;
}
