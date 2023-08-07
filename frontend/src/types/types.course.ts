import { getCreatedCourses } from "@/api/graphql/gql";
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

export enum CategoryEnum {
  design = "design",
  development = "development",
  marketing = "marketing",
  business = "business",
  it = "it",
  personalDevelopment = "personalDevelopment",
  photography = "photography",
  music = "music",
  lifestyle = "lifestyle",
  healthFitness = "healthFitness",
  teacherTraining = "teacherTraining",
  academics = "academics",
  language = "language",
  testPrep = "testPrep",
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
