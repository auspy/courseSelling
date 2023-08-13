"use client";
import HeroCommon from "@/components/hero/HeroCommon";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import { modifyCoursesData } from "@/data/modify/modify.courses";
import { CoursesQueryProps } from "@/types/types.course";
import Link from "next/link";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { atomUserName } from "@/state/atoms/atom.username";
import { useRecoilState } from "recoil";
import { GET_PURCHASED_COURSES } from "@/api/graphql/gql";

// i tried using getClient here but it was not working because cache was being sent with the query
const Purchased = () => {
  const { data } = useSuspenseQuery<CoursesQueryProps>(GET_PURCHASED_COURSES, {
    fetchPolicy: "network-only",
  });
  const pCourses = data?.getPurchasedCourses;
  const [userState] = useRecoilState(atomUserName);
  const needLogin =
    (userState.username && userState.username.length == 0) ||
    !userState.username ||
    userState.role == "ADMIN";
  console.log("purchased courses", JSON.stringify(pCourses));
  const foundCourses = pCourses?.status == "success" && pCourses?.data?.length;
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
      ) : needLogin ? (
        <h4 className="mt20">
          <Link href={"/auth"}>
            <span style={{ color: "var(--primary)" }}>
              <u>Login as user</u>
            </span>
          </Link>
          {" to view purchased courses"}
        </h4>
      ) : (
        <h4 className="mt20">
          {"No Courses Found"}
          <Link
            href={"/courses"}
            className="ml5"
            style={{ color: "var(--primary)" }}
          >
            <u>Explore Courses!</u>
          </Link>
        </h4>
      )}
      {/* <BelowHero /> */}
    </>
  );
};
export default Purchased;