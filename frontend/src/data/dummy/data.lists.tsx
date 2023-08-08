import { ListDataProps } from "@/types/types.list";
import IconStar from "@/../public/icons/IconStar";
import { CategoryEnum } from "@/types/types.course";
import IconStarBlur from "../../../public/icons/IconStarBlur";
// const icon = <IconStarBlur size={24} stroke="var(--shadow)" />;
const icon = <IconStar size={24} />;

export const listData: ListDataProps[] = [
  {
    text: "Acquire a strong understanding of the core concepts and principles.",
    icon,
  },
  {
    text: "Develop hands-on skills through real-world exercises and projects.",
    icon,
  },
  {
    text: "Learn how to analyze and solve challenges related to the subject.",
    icon,
  },
  {
    text: "Enhance your ability to think critically and make informed decisions.",
    icon,
  },
  {
    text: "Discover techniques to apply theoretical knowledge in practical scenarios.",
    icon,
  },
  {
    text: "Gain insights into proven strategies and methods used by professionals.",
    icon,
  },
  {
    text: "Build confidence in your abilities through guided learning and practice.",
    icon,
  },
  {
    text: "Delve deep into the subject matter to gain a comprehensive understanding.",
    icon,
  },
  {
    text: "Access content that is aligned with current industry trends and practices.",
    icon,
  },
  {
    text: "Learn how to work effectively in teams and collaborate on projects.",
    icon,
  },
  {
    text: "Develop communication skills to express ideas clearly and engage with others.",
    icon,
  },
  {
    text: "Establish a foundation for lifelong learning and further skill development.",
    icon,
  },
];

export const dummyCategoryList: CategoryEnum[] = [
  ...Object.values(CategoryEnum),
];
