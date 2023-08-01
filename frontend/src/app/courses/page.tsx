import CourseCardGrid from "@/components/cards/CourseCardGrid";
import HeroCourses from "@/components/coursesPage/hero/HeroCourses";
import { CourseCardProps } from "@/types/types.card";

const Courses = () => {
  const cardData: CourseCardProps[] = [
    {
      course: {
        img: {
          img: "/images/hero/business.png",
          alt: "business",
          height: 1,
          width: 1,
        },
        id: "1",
        title: "creative writing: Crafting personal essays with impact",
        price: 649,
        creator: "John Doe",
        purchaseCount: 156000,
      },
    },
    {
      course: {
        img: {
          img: "/images/hero/art.png",
          alt: "art",
          height: 1,
          width: 1,
        },
        id: "2",
        title: "creative writing: Crafting personal",
        price: 321,
        creator: "Josh Doance",
        purchaseCount: 123000,
      },
    },
  ];
  return (
    <>
      <HeroCourses />
      <CourseCardGrid cardData={cardData} gridClass="mt60" />
    </>
  );
};
export default Courses;
