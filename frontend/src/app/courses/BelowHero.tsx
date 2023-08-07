"use client";
import TabButtonsRow from "@/components/buttons/TabButtons/TabButtonsRow";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import { dummyCategoryList } from "@/data/dummy/data.lists";
import { modifyCoursesData } from "@/data/modify/modify.courses";
import { useState } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import GET_COURSES from "@/api/graphql/queries/getCourses.graphql";
import { CourseProps, CoursesQueryProps } from "@/types/types.course";

const BelowHero = () => {
  const [active, setActive] = useState<string>("design");
  const { data } = useSuspenseQuery<CoursesQueryProps>(GET_COURSES);
  const foundCourses = data?.getCourses?.status == "success";
  return (
    <>
      {/* TAB BUTTONS */}
      <TabButtonsRow
        width={1200}
        active={active}
        setActive={setActive}
        buttonList={dummyCategoryList}
      />
      {foundCourses ? (
        <CourseCardGrid
          type="grid"
          cardData={modifyCoursesData(data?.getCourses?.data as CourseProps[])}
          gridStyle={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            rowGap: 30,
            paddingBottom: 80,
          }}
          gridClass="mt30"
        />
      ) : (
        <h4>No Courses Found</h4>
      )}
    </>
  );
};

export default BelowHero;
