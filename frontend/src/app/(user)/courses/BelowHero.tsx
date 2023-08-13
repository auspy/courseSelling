"use client";
import TabButtonsRow from "@/components/buttons/TabButtons/TabButtonsRow";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import { dummyCategoryList } from "@/data/dummy/data.lists";
import { modifyDivideIntoCategories } from "@/data/modify/modify.courses";
import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import GET_COURSES from "@/api/graphql/queries/getCourses.graphql";
import {
  CategoryEnum,
  CourseCategorySortedProps,
  CourseProps,
  CoursesQueryProps,
} from "@/types/types.course";
import { resetHeader } from "@/helper/common";

const BelowHero = () => {
  const [active, setActive] = useState<CategoryEnum>(CategoryEnum.design);
  const { data } = useSuspenseQuery<CoursesQueryProps>(GET_COURSES);
  const foundCourses = data?.getCourses?.status == "success";
  const courses: CourseCategorySortedProps = modifyDivideIntoCategories(
    data?.getCourses?.data as CourseProps[]
  );
  useEffect(() => {
    resetHeader();
  }, []);
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
          cardData={courses[active]}
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
