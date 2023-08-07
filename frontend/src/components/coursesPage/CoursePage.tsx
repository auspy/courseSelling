"use client";
import HeroCourse from "@/components/coursesPage/hero/HeroCourse";
import List from "@/components/lists/List";
import {
  CourseProps,
  CourseQueryProps,
  CoursesQueryProps,
} from "@/types/types.course";
import { usePathname } from "next/navigation";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import GET_COURSE from "@/api/graphql/queries/getACourse.graphql";
import GET_COURSES from "@/api/graphql/queries/getCourses.graphql";
import { dummyCardData } from "@/data/dummy/data.courses";
import { listData } from "@/data/dummy/data.lists";
import { defaultCourseImg } from "@/helper/constants.global";
import { modifyCoursesData } from "@/data/modify/modify.courses";

const CoursePage = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const courseId = path.split("/")[path.split("/").length - 1];
  console.log(courseId, "is the id of this course");
  const { data } = useSuspenseQuery<CourseQueryProps>(GET_COURSE, {
    variables: { id: courseId },
  });
  const foundCourse = data.getCourse.status == "success";
  const dataReceived = data.getCourse.data[0];
  // todo can limit the number of courses to be fetched. can add based on recommendations.
  // mostly will be getting from apollo cache or will store to cache to used later
  const { data: coursesData } =
    useSuspenseQuery<CoursesQueryProps>(GET_COURSES);
  const foundCourses = coursesData?.getCourses?.status == "success";
  return (
    <div className="topContainer" style={{ height: "100%", paddingBottom: 80 }}>
      {children}
      <div
        className={`container1200 ${!foundCourse && "fcc"}`}
        style={{ height: "100%" }}
      >
        {foundCourse && (
          <HeroCourse
            courseData={{
              ...dataReceived,
              img: {
                ...dataReceived.img,
                src:
                  dataReceived.img?.src ||
                  dataReceived.imageLink ||
                  defaultCourseImg.src,
              },
            }}
          />
        )}
        {/* BELOW HERO SECTIONS */}
        <div
          style={{
            maxWidth: foundCourse ? 834 : 1200,
            gap: 30,
            paddingTop: 30,
          }}
          className="w100 fcfs"
        >
          {/* WHAT YOU WILL LEARN */}
          {false && (
            <div className="w100">
              <h3 className="semi mb20">What you'll learn</h3>
              <List data={listData} maxColumns={2} maxRows={3} />
            </div>
          )}
          <div className="w100">
            <h3 className="semi mb20">
              {foundCourse
                ? "Students also bought"
                : "Some courses you might like"}
            </h3>
            <CourseCardGrid
              type={"grid"}
              cardData={
                foundCourses
                  ? modifyCoursesData(
                      coursesData?.getCourses?.data as CourseProps[]
                    )
                  : dummyCardData(5)
              }
              gridStyle={{
                width: "100%",
                gap: foundCourse ? 25 : "30px",
              }}
              // maxColoumns={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursePage;
