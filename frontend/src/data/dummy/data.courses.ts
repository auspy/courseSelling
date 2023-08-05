import { generateRandomInt } from "@/helper/common";
import { CourseCardProps } from "@/types/types.card";
import { CourseProps } from "@/types/types.course";
import { ImgProps } from "@/types/types.img";

// TYPES
type CourseInput = Omit<CourseProps, "_id" | "title" | "price" | "img"> & {
  _id?: string;
  title?: string;
  price?: number;
  img?: ImgProps;
};

// DATA GENERATION FUNCTIONS
export const createDummyCourseData = ({
  _id = "64aadb9b3860e3d23026a4f6",
  title = "creative writing= Crafting personal essays with impact",
  description = "Speed up the skill acquisition process by finding unlimited courses that matches your niche.",
  price = generateRandomInt(1000, 100),
  creator = {
    username: "John Doe",
  },
  purchaseCount,
  img = {
    src: "/images/hero/business.png",
    alt: "business",
    fill: true,
  },
}: CourseInput) => {
  return {
    _id,
    title,
    description,
    price,
    creator: {
      username: creator.username,
    },
    purchaseCount,
    img: {
      src: img.src,
      alt: img.alt,
      fill: img.fill,
    },
  };
};

// DATA
// generates given number of cards
export const dummyCardData = (totalCards: number = 2): CourseCardProps[] => {
  const arr: CourseCardProps[] = [];
  for (let index = 0; index < totalCards; index++) {
    arr.push({
      course: createDummyCourseData({ creator: { username: "John Doe" } }),
    });
  }
  return arr;
};

export const dummyCourseData: CourseProps = createDummyCourseData({});

export const dummyTrainCardData = (): { [key: string]: CourseCardProps[] } => {
  const arr: string[] = [
    "design",
    "management",
    "marketing",
    "development",
    "business",
    "photography",
    "music",
  ];
  const obj: { [key: string]: CourseCardProps[] } = {};
  for (const topic of arr) {
    obj[topic] = dummyCardData(5);
  }
  return obj;
};
