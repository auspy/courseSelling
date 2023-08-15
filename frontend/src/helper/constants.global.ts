import { ImgProps } from "@/types/types.img";

const port = 3002;
export const isDev = process.env.NODE_ENV === "development";
export const urlGql = isDev
  ? `http://localhost:${port}/graphql`
  : "https://course-selling-eyfo.onrender.com/graphql";
// export const urlGql = `https://course-selling-eyfo.onrender.com/graphql`;
export const defaultCourseImg: ImgProps = {
  src: "/images/hero/business.png",
  alt: "business",
  height: 1,
  width: 1,
};
