import { getClient } from "@/api/graphql/ApolloClient";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import HeroCourses from "@/components/coursesPage/hero/HeroCourses";
import GET_COURSES from "@/api/graphql/queries/getCourses.graphql";
import { CoursesQueryProps } from "@/types/types.course";
import { modifyCoursesData } from "@/data/modify/modify.courses";

const Courses = async () => {
  const { data } = await getClient().query<CoursesQueryProps>({
    query: GET_COURSES,
  });
  console.log(JSON.stringify(data.getCourses.data));
  const foundCourses = data.getCourses.status == "success";
  return (
    <>
      <HeroCourses />
      {foundCourses && (
        <CourseCardGrid
          type="grid"
          cardData={modifyCoursesData(data.getCourses.data)}
          gridStyle={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            rowGap: 30,
            paddingBottom: 80,
          }}
          gridClass="mt60"
        />
      )}
    </>
  );
};
export default Courses;
