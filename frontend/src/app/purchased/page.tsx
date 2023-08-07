"use client";
import HeroCommon from "@/components/hero/HeroCommon";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import { modifyCoursesData } from "@/data/modify/modify.courses";
import { CoursesQueryProps } from "@/types/types.course";
import GET_COURSES from "@/api/graphql/queries/getPurchasedCourses.graphql";
import Link from "next/link";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// i tried using getClient here but it was not working because cache was being sent with the query
const Purchased = () => {
  const { data } = useSuspenseQuery<CoursesQueryProps>(GET_COURSES);
  const pCourses = data?.getPurchasedCourses;
  const needLogin = pCourses?.msg;
  console.log("data", JSON.stringify(pCourses));
  const foundCourses = pCourses?.status == "success";
  return (
    <>
      <HeroCommon text="My" highlightText="Learnings" />
      {foundCourses ? (
        <CourseCardGrid
          type="grid"
          cardData={modifyCoursesData(pCourses?.data)}
          gridStyle={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            rowGap: 30,
            paddingBottom: 80,
          }}
          gridClass="mt60"
        />
      ) : (
        <Link href={"/auth"}>
          <h4>
            {needLogin ? "Login to view purchased courses" : "No Courses Found"}
          </h4>
        </Link>
      )}
      {/* <BelowHero /> */}
    </>
  );
};
export default Purchased;
