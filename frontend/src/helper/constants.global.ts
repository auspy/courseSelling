import { ImgProps } from "@/types/types.img";

const port = 3002;
export const urlGql = `http://localhost:${port}/graphql`;
export const defaultCourseImg: ImgProps = {
  src: "/images/hero/business.png",
  alt: "business",
  height: 1,
  width: 1,
};
