import HeroCourse from "@/components/coursesPage/hero/HeroCourse";
import { CourseProps } from "@/types/types.course";

const Course = () => {
  const courseData: CourseProps = {
    id: "1",
    title: "creative writing: Crafting personal essays with impact",
    desc: "Speed up the skill acquisition process by finding unlimited courses that matches your niche.",
    price: 649,
    creator: "John Doe",
    purchaseCount: 156000,
    img: {
      img: "/images/hero/business.png",
      alt: "business",
      height: 1,
      width: 1,
    },
  };
  return (
    <div className="topContainer" style={{ height: "100vh" }}>
      <HeroCourse courseData={courseData} />
    </div>
  );
};
export default Course;
