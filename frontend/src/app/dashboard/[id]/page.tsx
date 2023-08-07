import { getClient } from "@/api/graphql/ApolloClient";
import { GET_COURSE } from "@/api/graphql/gql";
import FormNewCourse from "@/components/forms/FormNewCourse";
import Heading from "@/components/text/Heading";
import { CourseQueryProps } from "@/types/types.course";

const page = async ({
  params,
}: {
  params: {
    id?: string;
  };
}) => {
  // get course data
  const { data } = await getClient().query<CourseQueryProps>({
    query: GET_COURSE,
    variables: { id: params.id },
  });
  const course = data?.getCourse?.data?.[0];
  const status = data?.getCourse?.status;
  const foundCourses = status == "success";
  console.log("dashboard/id", course);
  if (!foundCourses || !course) {
    return <h4>Course not found</h4>;
  }
  return (
    <>
      <Heading text={"Course: " + course.title || "Update Course"} />
      <FormNewCourse {...course} />
    </>
  );
};

export default page;
