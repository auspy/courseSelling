"use client";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import { dummyCardData } from "@/data/dummy/data.courses";
import { getCreatedCourses } from "@/api/graphql/gql";
import { CourseProps, CoursesQueryProps } from "@/types/types.course";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { modifyCoursesData } from "@/data/modify/modify.courses";
const DashCourses = () => {
  const { data, error } =
    useSuspenseQuery<CoursesQueryProps>(getCreatedCourses);
  const courses = data?.getCreatedCourses?.data;
  const status = data?.getCreatedCourses?.status;
  const foundCourses = status == "success";
  console.log("data", data?.getCreatedCourses?.data);
  if (!foundCourses || courses?.length == 0 || error || !data || !courses) {
    return <h4>No Courses Found</h4>;
  }
  return (
    <>
      <CourseCardGrid
        type={"grid"}
        cardData={
          foundCourses
            ? modifyCoursesData(courses as CourseProps[], "/dashboard/")
            : dummyCardData(5, "/dashboard")
        }
        gridStyle={{
          width: "100%",
          maxWidth: "inherit",
          rowGap: 25,
          columnGap: 5,
          justifyContent: "space-between",
        }}
      />
    </>
  );
};

export default DashCourses;
