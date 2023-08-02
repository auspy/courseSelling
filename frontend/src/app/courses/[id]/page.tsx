"use client";
import HeroCourse from "@/components/coursesPage/hero/HeroCourse";
import List from "@/components/lists/List";
import { CourseProps } from "@/types/types.course";
import { usePathname } from "next/navigation";
import IconStar from "../../../../public/icons/IconStar";
import { ListDataProps } from "@/types/types.list";
import Header from "@/components/header/Header";
import Heading from "@/components/text/Heading";
import CourseCardGrid from "@/components/cards/CourseCardGrid";

const Course = () => {
  const path = usePathname();
  const courseId = path.split("/")[path.split("/").length - 1];
  console.log(courseId, "is the id of this course");
  // this id can be used to fetch the course data from the backend
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
  const listData: ListDataProps[] = [
    {
      text: "Speed up the skill acquisition process by finding unlimited courses that matches your niche.",
      icon: <IconStar />,
    },
    { text: "testing values", icon: <IconStar /> },
    { text: "testing values", icon: <IconStar /> },
    { text: "testing values", icon: <IconStar /> },
    { text: "testing values", icon: <IconStar /> },
    { text: "testing values", icon: <IconStar /> },
    { text: "testing values", icon: <IconStar /> },
  ];
  return (
    <div className="topContainer" style={{ height: "100%", paddingBottom: 80 }}>
      <div
        className="topContainer"
        style={{
          borderBottom: "1px solid var(--light-bg)",
        }}
      >
        <Header />
      </div>
      <div className="" style={{ height: "100%" }}>
        <HeroCourse courseData={courseData} />
        {/* BELOW HERO SECTIONS */}
        <div style={{ maxWidth: 834, gap: 30 }} className="w100 fcfs">
          {/* WHAT YOU WILL LEARN */}
          <div className="mt30 w100">
            <h3 className="semi mb20">What you'll learn</h3>
            <List data={listData} maxColumns={2} maxRows={3} />
          </div>
          <div className="w100">
            <h3 className="semi mb20">Students also bought</h3>
            <CourseCardGrid
              type="row"
              cardData={[
                { course: courseData },
                { course: courseData },
                { course: courseData },
                { course: courseData },
              ]}
              // maxColoumns={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
